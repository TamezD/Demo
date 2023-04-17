import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ServiceService } from 'src/app/service/service.service';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  //Variables 
  telfono: any;
  botonEnviar: boolean = true;

  //Varibales de Mensajes
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  color: ThemePalette = 'primary';

  //Variables de Valores de validacion.
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nombreFormControl = new FormControl('', [Validators.required, Validators.maxLength(20)]);
  apellidoFormControl = new FormControl('', [Validators.required, Validators.maxLength(20)]);
  comentariosFormControl = new FormControl('', [Validators.required]);
  telFormControl = new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(10)]);
  TerminosChecked: boolean = false;
  
  //Variables de carga de Archivo
  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl("", [Validators.required])
  });

  constructor (private servicios: ServiceService, private _snackBar: MatSnackBar, private http: HttpClient){
    
  }
    
  ngOnInit() {
    //Mostrar el Preloader 
    this.servicios.setPreloaderToggle(true);
    //Ocultar el preloader
    this.preloaderHide();
  }

  //---------------
  //  FUNCIONES
  //---------------

  //Cambio de estatus de terminos y condiciones.
  cambioTerminos(){
    this.TerminosChecked=!this.TerminosChecked;
    this.validarInfo();
  }

  //Validacion del formularioo
  validarInfo(){
    console.log(this.fileForm.file.invalid)
    if(this.emailFormControl.status == "VALID"  
      && this.nombreFormControl.status == "VALID" 
      && this.apellidoFormControl.status == "VALID"
      && this.comentariosFormControl.status == "VALID"
      && this.telFormControl.status == "VALID" 
      && this.fileForm.file.invalid == false
      && this.TerminosChecked){
      this.botonEnviar = false;
    }else{
      this.botonEnviar = true;
    }
  }

  //Envio de comentarios y mostrar mensaje de confirmacion
  mensajeEnvio() {
    //Despues de enviar se bloquea el botton
    this.botonEnviar = true;
    this._snackBar.open('Comentario Enviado..Gracias!!', 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2500,
    });

    //Limpiar los valores.
    setTimeout(() => {
      window.location.reload();
    },2600)
  }

  //Funcion ocultar Preloader
  preloaderHide(){
    setTimeout(() => {
      this.servicios.setPreloaderToggle(false);
    },1400)
  }

  ///CARGA DE ARCHIVO///
  get fileForm(){
    return this.myForm.controls;
  }

  //Cambio de archivo
  onFileChange(event: any) {
    this.servicios.setPreloaderToggle(true);
    try{
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        console.log(file);
        this.myForm.patchValue({
          fileSource: file
        });
      }
      this.preloaderHide();
      //console.log(this.myForm);
    }catch(e) {
      console.log(e);
      this._snackBar.open('A ocurrido un error..', 'Cerrar', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: "bottom",
        panelClass: ['fileError'],
        duration: 2500,
      }); 
    }
  }

  //Envio de Archivo a servidor de prueba
  enviarComentarios(){
    this.servicios.setPreloaderToggle(true);
    const formData = new FormData(); 
    var file: any = this.myForm.get("fileSource");
    formData.append('file',file.value)
    console.log(formData)
    this.http.post('http://file.io', formData)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.mensajeEnvio();
        },
        error: (err) => {
          console.log("Error, al subir el archivo. "+err);
        }
      });
  }
}
