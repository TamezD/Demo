import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor (private servicio: ServiceService){
    
    
  }
  ngOnInit() {
    setTimeout(() => {
      //this.servicio.toggleFalse(false);
    }, 10)
  }

}
