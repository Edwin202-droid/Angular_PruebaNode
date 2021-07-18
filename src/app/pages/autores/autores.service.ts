import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Autor } from "./autor.model";

@Injectable({
  providedIn:'root'
})

export class AutoresService{

  baseUrl = environment.baseUrl;
  private autoresLista: Autor[] = [];

  constructor(private http: HttpClient){}

  obtenerAutores(){
    return this.autoresLista.slice();
  }
}
