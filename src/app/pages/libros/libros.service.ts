import { Subject } from "rxjs";
import { Books } from "./libros.model";


export class BooksService{

  private booksLista: Books[] = [
    {libroId: 1, titulo: 'Algoritmos', descripcion: 'libro basico', autor:' Edwin', precio: 18},
    {libroId: 2, titulo: ' Angular', descripcion: ' libro intermedio', autor: ' Johan', precio: 15}
  ];

  bookSubject = new Subject<Books>();

  obtenerLibros(){
    return this.booksLista.slice();
  }

  guardarLibro(book: Books){
    this.booksLista.push(book);
    this.bookSubject.next(book);
  }
}
