import { Component, Inject } from '@angular/core';
import { ModalErrorComponent } from '../modal-error/modal-error.component';
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
  step = 3;

  animal: string;
  name: string;

  constructor (public dialog: MatDialog){

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalErrorComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
