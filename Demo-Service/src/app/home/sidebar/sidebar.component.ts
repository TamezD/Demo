import { Component,ViewChild, OnInit, Input} from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import {ThemePalette} from '@angular/material/core';
import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent  {
  //Varibles
  status: boolean = true;
  sidebarInfo: any;
  sidebarAll: boolean = false;

  //Varibles de Preloader
  preloader: boolean = true;
  numerColorPreloader: number = 1;
  color: ThemePalette = 'primary';

  //@ViewChild('sidenav') public sidenav: MatSidenav;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(private Services: ServiceService, private Router: Router, private cdRef: ChangeDetectorRef){
    //Code
    
  }

  //---------------
  //FUNCIONES DE INICIO 
  //---------------
  ngOnInit() {
    this.Services.setPreloaderToggle(true);
    this.changeColorPreloader();
    this.getMySidebar()
    console.log(this.sidenav);

    /* Funcion de Observable de Sidebar */
    //Se inicia el obserbable para controlar con otro controlador 
    this.Services.sideNavToggleSubject.subscribe(()=> {
    //Para que no marque error se envia al inicio un estatus de falso
    console.log(this.sidenav.opened);
      if(this.status){
        this.sidenav.toggle(false);
      }else{
        this.sidenav.toggle();
      }
    });
    
    this.status = false;


    this.Services.sideNavToggleFalseSubject.subscribe((sidInfo)=> {
      if(!sidInfo){
        this.sidenav.toggle(false);
      }
    });

    this.Services.preloaderToggle.subscribe((preload)=> {
      this.preloader = preload;
      //Correcion de error NG0100
      this.changeColorPreloader();
      this.cdRef.detectChanges();
      
    });
  }


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

  //Funcion de cambio de color de preloader
  changeColorPreloader(){
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
    setTimeout(() => {
      if(this.preloader == true){
        this.changeColorPreloader();
      }
    },2400)
  }

  //Funcion ocultar Preloader
  changePreloader(){
    setTimeout(() => {
     this.preloader = !this.preloader;
    },1400)
  }

}
