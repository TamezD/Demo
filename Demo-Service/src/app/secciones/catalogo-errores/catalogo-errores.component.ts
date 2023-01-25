import { Component, Inject } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { ModalErrorComponent } from '../modal-error/modal-error.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

//Exportar Modal de Catalogo Error
export interface DialogData {
  error: any
}

@Component({
  selector: 'app-catalogo-errores',
  templateUrl: './catalogo-errores.component.html',
  styleUrls: ['./catalogo-errores.component.css']
})
export class CatalogoErroresComponent {

  errors: any;

  constructor(private Services: ServiceService,  public dialog: MatDialog){
    this.getMyCatalogoError();
  }

  //---------------
  //  LLAMADAS A SERVICIOS
  //---------------
  //Trae informacion de calalogo de error.
  getMyCatalogoError(): void {
    this.Services.getMyCatalogoError()
    .subscribe((errors) => {
      this.errors = errors.data;
    });
  }

  //---------------
  //  FUNCIONES
  //---------------
  //Abrir Modal del catalogo de Error 
  openDialog(error: any): void {
    const dialogRef = this.dialog.open(ModalErrorComponent, {
      data: {error: error},
    });
  }


}
