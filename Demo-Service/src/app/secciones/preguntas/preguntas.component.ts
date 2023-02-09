import { Component, Inject } from '@angular/core';
import { ModalErrorComponent } from '../modal-error/modal-error.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from 'src/app/service/service.service';
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

  constructor (public dialog: MatDialog, private servicios: ServiceService){

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
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalErrorComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  //Funcion ocultar Preloader
  preloaderHide(){
    setTimeout(() => {
      this.servicios.setPreloaderToggle(false);
    },1400)
  }

}
