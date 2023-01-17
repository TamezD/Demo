import { Component,ViewChild, OnInit, Input} from '@angular/core';
import { ServiceService } from '../service/service.service';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent  {
  status: boolean = true;

  //@ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(private ServiceService: ServiceService){
    //Code
    
  }
 
  ngOnInit() {
    //---------------
    //FUNCIONES DE INICIO 
    //---------------

    /* Funcion de Observable de Sidebar */
    //Se inicia el obserbable para controlar con otro controlador 
    this.ServiceService.sideNavToggleSubject.subscribe(()=> {
    //Para que no marque error se envia al inicio un estatus de falso
      if(this.status){
        this.sidenav.toggle(false);
      }else{
        this.sidenav.toggle();
      }
    });
    this.status = false;
  }

  //              ---------------//
  //  FIN DE FUNCIONES DE INICIO 
  //              ---------------//
}
