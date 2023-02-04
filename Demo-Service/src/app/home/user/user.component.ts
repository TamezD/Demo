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
  

  constructor (private servicio: ServiceService, private Router: Router, private _snackBar: MatSnackBar){
    
  }

  ngOnInit() {
    this.changeColorPreloader();
    this.preloaderShow();
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

  //Funcion de cambio de color de preloader
  changeColorPreloader(){
    setTimeout(() => {
      switch(this.numerColorPreloader){
        case 1:
          this.color = 'primary';
          this.numerColorPreloader++;
        break;
        case 2:
          this.color = 'accent';
          this.numerColorPreloader++;
        break;
        case 3:
          this.color = 'warn';
          this.numerColorPreloader = 1;
        break;
      };
    if(this.preloader == true){
      this.changeColorPreloader();
    }
    },1400)
  }

  //Funcion ocultar Preloader
  preloaderShow(){
    setTimeout(() => {
     this.preloader = false;
    },1400)
  }
}
