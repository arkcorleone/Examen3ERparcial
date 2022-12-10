import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../Interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private myAppUrl: string = environment.endpoint;
  private myApiUrl: string = 'api/Producto/';


  constructor(private http: HttpClient) { }

  getlistProductos(): Observable<Persona[]> 
  {
    
    return this.http.get<Persona[]>(this.myAppUrl + this.myApiUrl);
    
  }

  getProducto(id: number): Observable<Persona> 
  {
  
    return this.http.get<Persona>(this.myAppUrl + this.myApiUrl + id);
    
  }
}
 