import { Component } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  
  //---------------
  //  FUNCIONES
  //---------------
  openAlert(){
    Swal.fire(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  }

}


