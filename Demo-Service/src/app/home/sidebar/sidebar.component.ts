import { Component,ViewChild, OnInit, Input} from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


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

  constructor(private Services: ServiceService, private Router: Router){
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

    this.Services.sideNavToggleFalseSubject.subscribe((sidInfo)=> {
      if(!sidInfo){
        this.sidenav.toggle(false);
      }
      });
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
      //console.log(JSON.stringify(sidebar.data));
    });
  }

  //---------------
  //  FUNCIONES
  //---------------
  //Funcion de Navegacion de Sidebar
  routerLink(router: any, tipo: any){
    if(tipo == "page"){
      window.open(router, "_blank");
    }else{
      this.Router.navigate(['/'+router]);
    }
    this.Services.toggleFalse(false);
  }

}
