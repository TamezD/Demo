import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service'; 
import {ThemePalette} from '@angular/material/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  //Varibles de Preloader
  preloader: boolean = true;
  numerColorPreloader: number = 1;
  color: ThemePalette = 'primary';
  
  //Varibales de Mensajes
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  

  constructor (private servicios: ServiceService, private Router: Router, private _snackBar: MatSnackBar){
    
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
  //Funcion de regreso de Home
  BackHome(){
    this.Router.navigate(['']);
  }

  //Envio de Follo y mostrar mensaje de confirmacion
  enviarFollow() {
    this._snackBar.open('Gracias por Seguirme!!', 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 1500,
    });
  }

  //Funcion ocultar Preloader
  preloaderHide(){
    setTimeout(() => {
      this.servicios.setPreloaderToggle(false);
    },1400)
  }
}
