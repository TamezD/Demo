import { Component, Inject, ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

//Exportar Modal de Catalogo Error
export interface DialogData {
  error: any
}

@Component({
  selector: 'app-modal-error',
  templateUrl: './modal-error.component.html',
  styleUrls: ['./modal-error.component.css']
})

export class ModalErrorComponent {
  @ViewChild('close') closeButton: MatButtonModule;

  /* Constructor para la llamada a modal, con Injector de parametro */
  constructor(public dialogRef: MatDialogRef<ModalErrorComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData,) {
    //Informacion que treae el modal como objeto
    //console.log(JSON.stringify(data));
  }

  //---------------
  //  FUNCIONES
  //---------------
  //Cerrar modal
  onNoClick(): void {
    this.dialogRef.close();
  }

}
