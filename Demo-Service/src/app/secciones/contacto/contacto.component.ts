import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  //Variables 
  public myForm: FormGroup;
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

  constructor (private servicios: ServiceService, private _snackBar: MatSnackBar){
    
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
    if(this.emailFormControl.status == "VALID"  
      && this.nombreFormControl.status == "VALID" 
      && this.apellidoFormControl.status == "VALID"
      && this.comentariosFormControl.status == "VALID"
      && this.telFormControl.status == "VALID" 
      && this.TerminosChecked){
      this.botonEnviar = false;
    }else{
      this.botonEnviar = true;
    }
  }

  //Envio de comentarios y mostrar mensaje de confirmacion
  enviarComentarios() {
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
}
