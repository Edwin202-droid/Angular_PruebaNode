import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepicker, MatDialog, MatOption, MatSelectChange } from '@angular/material';
import { Autor } from '../../autores/autor.model';
import { AutoresService } from '../../autores/autores.service';
import { BooksService } from '../libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  selectAutor: string;//captura el indice
  selecAutorTexto: string; //captura el texto
  fechaPublicacion:string;
  autores:Autor[]=[];

  @ViewChild(MatDatepicker,{static:false}) picker: MatDatepicker<Date>

  constructor(private bookService: BooksService,
              private dialogRef: MatDialog,
              private autoresServices:AutoresService) { }

  ngOnInit() {
    this.autores = this.autoresServices.obtenerAutores();
  }

  selected(event: MatSelectChange){
    this.selecAutorTexto = (event.source.selected as MatOption).viewValue;
  }

  guardarLibro(form:NgForm){

    if(form.valid){
      this.bookService.guardarLibro({
        libroId: 1,
        descripcion: form.value.descripcion,
        titulo: form.value.titulo,
        autor: this.selecAutorTexto,
        precio: form.value.precio,
        fechaPublicacion: new Date(this.fechaPublicacion)
      });
      this.dialogRef.closeAll();
    }

  }
}
