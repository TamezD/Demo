import { Component, Inject } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';
import { ModalErrorComponent } from '../modal-error/modal-error.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ThemePalette} from '@angular/material/core';
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

  //Varibles de Preloader
  preloader: boolean = true;
  numerColorPreloader: number = 1;
  color: ThemePalette = 'primary';

  //Varibales de Mensajes
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private Services: ServiceService,  public dialog: MatDialog, private _snackBar: MatSnackBar){
    this.getMyCatalogoError();
  }

  ngOnInit() {
    this.changeColorPreloader();
    this.preloaderHide();
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
    },3300)
  }


}
