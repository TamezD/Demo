import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  //Varibles de Preloader
  preloader: boolean = true;
  numerColorPreloader: number = 1;
  color: ThemePalette = 'primary';

  constructor(private _snackBar: MatSnackBar){
  }

  ngOnInit() {
    this.changeColorPreloader();
    this.preloaderHide();
  }

  //---------------
  //  FUNCIONES
  //---------------
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
    },1350)
  }

  //Funcion ocultar Preloader
  preloaderHide(){
    setTimeout(() => {
     this.preloader = false;
    },1700)
  }

}
