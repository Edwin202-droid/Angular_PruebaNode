import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { LibroComponent } from './libro/libro.component';
import { Books } from './libros.model';
import { BooksService } from './libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit, AfterViewInit, OnDestroy {

  bookData : Books[] = [];
  desplegarColumnas: ["titulo","descripcion", "autor","precio"];
  dataSource = new MatTableDataSource<Books>();
  @ViewChild(MatSort, {static: false})ordenamiento: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginacion: MatPaginator;

  private bookSubscription: Subscription;

  constructor(private booksService: BooksService,
              private dialog: MatDialog) { }

  hacerFiltro(filtro: string){
    this.dataSource.filter= filtro;
  }

  abrirDialog(){
    this.dialog.open(LibroComponent,{
      width: '350px'
    });
  }

  ngOnInit() {
    //this.bookData = this.booksService.obtenerLibros();
    this.dataSource.data = this.booksService.obtenerLibros();

    this.bookSubscription = this.booksService.bookSubject.subscribe(()=>{
      this.dataSource.data = this.booksService.obtenerLibros();
    })
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.ordenamiento;
    this.dataSource.paginator = this.paginacion;
  }

  ngOnDestroy(){
    this.bookSubscription.unsubscribe();
  }
}
