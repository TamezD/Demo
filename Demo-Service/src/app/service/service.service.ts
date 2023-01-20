import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Subject, Observable, of, from } from 'rxjs';
import { environment } from '../../environments/environment';
import {MatDrawer} from '@angular/material/sidenav';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) { }

  //---------------
  //  OBSERBABLES 
  //---------------
  
  //Se inicia el obserbable para controlar con otro controlador 
  private sidebar = new BehaviorSubject(false);
  sidebarToggle = this.sidebar.asObservable();

  setSidebarToggle(value: any) {
      this.sidebar.next(value);
  }

  //Obserbable de Sidebar
  public sideNavToggleSubject = new BehaviorSubject(null);
  
  public toggle() {
    return this.sideNavToggleSubject.next(null);
  }
  //Obserbable de Sidebar con siempre false
  public sideNavToggleFalseSubject = new BehaviorSubject(null);
  
  public toggleFalse(tipo: any) {
    this.sideNavToggleFalseSubject.next(tipo);
  }

  //---------------
  //  LLAMADAS A WEBSERVICES 
  //---------------

  
  /* Encabezados */

  httpOptionsMySharepoint = {
    headers: new HttpHeaders({
        "accept": "application/json; odata=verbose",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
        "Content-Type": "application/json"
    })
  };

  httpOptionsMyService = {
    headers: new HttpHeaders({
        "Content-Type": "application/json"
    })
  };

  /* Funciones */

  //Servicio de Sidebar
  getMySindebar() {
    return this.http.get<any>(environment.sidebar.seccion,this.httpOptionsMyService);
  }

}
