import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeguridadService } from 'src/app/seguridad/seguridad.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit, OnDestroy {

  @Output() menuTogle = new EventEmitter<void>();
  estadoUsuario: boolean;
  usuarioSubcription: Subscription

  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit() {
    this.usuarioSubcription=  this.seguridadServicio.seguridadCambio.subscribe(status =>{
      this.estadoUsuario = status
    })
  }

  onMenuToggleDispatch(){
    this.menuTogle.emit();
  }

  ngOnDestroy(){
    this.usuarioSubcription.unsubscribe();
  }

  terminarSesion(){
    this.seguridadServicio.salirSesion();
  }
}
