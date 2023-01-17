import { Injectable} from '@angular/core';
import { BehaviorSubject, Subject, Observable, of, from } from 'rxjs';
import {MatDrawer} from '@angular/material/sidenav';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor() {
    
  }
  /* Funciones y varibales de Observables */
  
  //Se inicia el obserbable para controlar con otro controlador 
  private sidebar = new BehaviorSubject(false);
  sidebarToggle = this.sidebar.asObservable();

  setSidebarToggle(value: any) {
      this.sidebar.next(value);
  }

  public sideNavToggleSubject = new BehaviorSubject(false);

  public toggle() {
    return this.sideNavToggleSubject.next(false);
  }

}
