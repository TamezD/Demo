import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor (private servicio: ServiceService, private Router: Router){
    
  }
  ngOnInit() {
    
  }

  //---------------
  //  FUNCIONES
  //---------------
  //Funcion de regreso de Home
  BackHome(){
    this.Router.navigate(['']);
  }
}
