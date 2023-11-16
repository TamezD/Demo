import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  Fecha: any;
  constructor (private Router: Router, private servicios: ServiceService){

  }
  
  ngOnInit(){
    //Mostrar el Preloader 
    this.servicios.setPreloaderToggle(true);
    //Ocultar el preloader
    this.preloaderHide();
    //PRUEBA DE FORMATO FECHA 
    // this.Fecha = new Date();
    // this.Fecha = this.dateFormatterDayDefault(this.Fecha);
    // alert(this.Fecha);
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

  minTwoDigits(n: any) {
    return (n < 10 ? '0' : '') + n;
  }
  

  dateFormatterDayDefault(date: Date) {

    var newDate: string;
    let getTime = new Date();
    let month: string = this.minTwoDigits(date.getMonth() + 1);
    let formatted_date: string = this.minTwoDigits(date.getDate())  + "-" + month + "-" + date.getFullYear();
    let formatted_time: string = date.getHours() + ":" + this.minTwoDigits(date.getMinutes());

    newDate = formatted_date + " " + formatted_time;

    return newDate;

  }
  
}
