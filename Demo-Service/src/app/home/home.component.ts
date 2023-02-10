import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor (private Router: Router, private servicios: ServiceService){

  }
  
  ngOnInit(){
    //Mostrar el Preloader 
    this.servicios.setPreloaderToggle(true);
    //Ocultar el preloader
    this.preloaderHide();
  }
  ngAfterViewInit() {
    
  }

  //---------------
  //  FUNCIONES
  //---------------

  //Funcion ocultar Preloader
  preloaderHide(){
    setTimeout(() => {
      this.servicios.setPreloaderToggle(false);
    },1400)
  }
  
}
