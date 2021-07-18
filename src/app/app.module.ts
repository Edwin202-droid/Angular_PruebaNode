import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material/material.module';

import { LibrosComponent } from './pages/libros/libros.component';
import { LibroComponent } from './pages/libros/libro/libro.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { LoginComponent } from './seguridad/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { BarraComponent } from './navegacion/barra/barra.component';
import { MenuListaComponent } from './navegacion/menu-lista/menu-lista.component';

import { SeguridadService } from './seguridad/seguridad.service';
import { BooksService } from './pages/libros/libros.service';
import { MAT_DATE_LOCALE } from '@angular/material';
import { AutoresComponent } from './pages/autores/autores.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    LibroComponent,
    RegistroComponent,
    LoginComponent,
    BarraComponent,
    MenuListaComponent,
    HomeComponent,
    AutoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    SeguridadService,
    BooksService,
    /* Fechas en español */
    {provide: MAT_DATE_LOCALE, useValue:'es-ES'}
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    LibroComponent
  ]
})
export class AppModule { }
