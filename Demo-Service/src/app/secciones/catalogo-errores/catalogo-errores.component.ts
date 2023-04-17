import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { ModalErrorComponent } from '../modal-error/modal-error.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

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
  //Varibles 
  errors: any;

  //Varibales de Mensajes
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private servicios: ServiceService,  public dialog: MatDialog, private _snackBar: MatSnackBar){
    this.getMyCatalogoError();
  }

  ngOnInit() {
    //Mostrar el Preloader 
    this.servicios.setPreloaderToggle(true);
    //Ocultar el preloader
    this.preloaderHide();
  }

  //---------------
  //  LLAMADAS A SERVICIOS
  //---------------
  //Trae informacion de calalogo de error.
  getMyCatalogoError(): void {
    this.servicios.getMyCatalogoError()
    .subscribe((errors) => {
      this.errors = errors.data;
    });
  }

  //---------------
  //  FUNCIONES
  //---------------
  //Abrir Modal del catalogo de Error 
  openDialog(error: any): void {
    console.log(JSON.stringify(error));
    const dialogRef = this.dialog.open(ModalErrorComponent, {
      data: {error: error},
    });
  }

  //Funcion ocultar Preloader
  preloaderHide(){
    setTimeout(() => {
      this.servicios.setPreloaderToggle(false);
    },2400)
  }

}
