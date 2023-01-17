import { Component,ViewChild, OnInit, Input} from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent  {
  status: boolean = true;
  sidebarInfo: any;

  //@ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(private Services: ServiceService){
    //Code
    
  }
 
  ngOnInit() {
    //---------------
    //FUNCIONES DE INICIO 
    //---------------

    /* Funcion de Observable de Sidebar */
    //Se inicia el obserbable para controlar con otro controlador 
    this.Services.sideNavToggleSubject.subscribe(()=> {
    //Para que no marque error se envia al inicio un estatus de falso
      if(this.status){
        this.sidenav.toggle(false);
      }else{
        this.sidenav.toggle();
      }
    });
    this.status = false;

    this.getMySidebar()
  }

  //              ---------------//
  //  FIN DE FUNCIONES DE INICIO 
  //              ---------------//

  //---------------
  //  LLAMADAS A SERVICIOS
  //---------------

  //Servicio de Sidebar
  getMySidebar(): void {
    this.Services.getMySindebar()
    .subscribe((sidebar) => {
      this.sidebarInfo = sidebar.data;
      console.log(JSON.stringify(sidebar.data));
    });
  }

}
