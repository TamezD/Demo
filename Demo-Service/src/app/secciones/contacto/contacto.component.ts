import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  public myForm: FormGroup;
  telfono: any;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nombreFormControl = new FormControl('', [Validators.required, Validators.maxLength(20)]);
  apellidoFormControl = new FormControl('', [Validators.required, Validators.maxLength(20)]);
  comentariosFormControl = new FormControl('', [Validators.required]);
  telFormControl = new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(10)]);
  TerminosChecked: boolean = false;

  constructor (){
    
  }
    
  ngOnInit() {
    
  }
  obtenerValor(){
    console.log(this.TerminosChecked);
  }

  cambioTerminos(){
    this.TerminosChecked=!this.TerminosChecked;
    console.log(this.TerminosChecked);
  }
}
