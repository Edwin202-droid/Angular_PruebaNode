import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { LoginData } from "./login-data.model";
import { Usuario } from "./usuario.model";

@Injectable()

export class SeguridadService{
  seguridadCambio= new Subject<boolean>();
  private usuario: Usuario;

  constructor(private router: Router){}

  registrarUsuario(user: Usuario){
    this.usuario = {
      email:user.email,
      usuarioId: Math.round(Math.random() * 10000 ).toString(),
      nombre: user.nombre,
      apellidos: user.apellidos,
      username: user.username,
      password:''
    };

    this.seguridadCambio.next(true);
    this.router.navigate(['/']);
  }

  login(loginData: LoginData){
    this.usuario = {
      email: loginData.email,
      usuarioId: Math.round(Math.random() * 10000).toString(),
      nombre: '',
      apellidos: '',
      username: '',
      password: ''
    };
    this.seguridadCambio.next(true);
    this.router.navigate(['/']);
  }

  salirSesion(){
    this.usuario = null;
    this.seguridadCambio.next(false);
    this.router.navigate(['/login']);
  }

  obtenerUsuario(){
    return {...this.usuario};
  }

  onSesion(){
    return this.usuario != null;
  }
}
