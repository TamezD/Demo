import { Component,ViewChild, VERSION} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from 'src/app/service/service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {animate, state, style, transition, trigger} from '@angular/animations';



//Columnas de tabla
export interface UserioElement {
  nombreUsario: any;
  tipoJugador: any;
  consola: any;
  plataforma: any;
  userImag: any;
  descripcionUsuario: any;

}

const ELEMENT_DATA: UserioElement[] = [];


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UsuariosComponent {

  //Varibles
  filtre: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private servicios: ServiceService){
    //Vaciamos la tabla.
    this.dataSource = new MatTableDataSource();
  }
  
  ngOnInit() {
    this.getCatalogoUser();
    this.servicios.setPreloaderToggle(true);
  }

  //Se crea la data de la tabla.
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['nombreUsario', 'tipoJugador', 'consola', 'plataforma'];
  //Se agrega las columna de expandit y se usa columnsToDisplayWithExpand como array de columnas
  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];
  expandedElement: UserioElement | null;

  //---------------
  //  FUNCIONES
  //---------------
  //Busca en la tabla 
  buscarFilterTabla(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //LLamada al servicio de Catalogo de Usuarios
  getCatalogoUser(): void{
    this.servicios.getCatalogoUsuarios().subscribe((usuarios) =>{
      //Barrido de objeto de catalogo de usuarios
      for(let user of usuarios.data){
        let coutUser = {
          nombreUsario: user.attributes.nombreUsario,
          userImag: user.attributes.userImag,
          tipoJugador: user.attributes.tipoUsuario,
          consola: user.attributes.console,
          plataforma: user.attributes.plataforma,
          descripcionUsuario: user.attributes.descripcionUsuario
        };
        //agregando al contenedor de elemento de tabla
        ELEMENT_DATA.push(coutUser);
      }
      //Se actualiza la data de la tabla.
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      
      //Se actualiza la paginacion de la tabla NOTA, cada vez que se actualize se requiere que actualize la paginacion.
      this.columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];

      //Se actualiza la data para la paginacion
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //Oculta el preloader
      this.preloaderHide();
      //console.log(JSON.stringify(dataSource));
    });
  }

  //Funcion ocultar Preloader
  preloaderHide(){
    setTimeout(() => {
      this.servicios.setPreloaderToggle(false);
    },1400)
  }
}