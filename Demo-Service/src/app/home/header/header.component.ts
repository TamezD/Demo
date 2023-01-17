import { Component, Output,Input } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import {MatDrawer} from '@angular/material/sidenav';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
 
  constructor(private ServiceService: ServiceService){
    //Code
  }

  //---------------
  //FUNCIONES 
  //---------------
  clickMenu() {
    this.ServiceService.toggle();
  }

  //            --------------//
  //  FIN DE FUNCIONES  
  //            --------------//
}
