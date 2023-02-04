import { Component, Inject } from '@angular/core';
import { ModalErrorComponent } from '../modal-error/modal-error.component';
import {ThemePalette} from '@angular/material/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  //Variables
  step = 3;
  animal: string;
  name: string;

  //Varibles de Preloader
  preloader: boolean = true;
  numerColorPreloader: number = 1;
  color: ThemePalette = 'primary';


  constructor (public dialog: MatDialog){

  }

  ngOnInit() {
    this.changeColorPreloader();
    this.preloaderShow();
  }

  //---------------
  //  FUNCIONES
  //---------------
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalErrorComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
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
