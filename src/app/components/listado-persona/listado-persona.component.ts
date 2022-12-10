import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from 'src/app/Interfaces/persona';
import { PersonaService } from 'src/app/services/persona.service';


@Component({
  selector: 'app-listado-persona',
  templateUrl: './listado-persona.component.html',
  styleUrls: ['./listado-persona.component.css']
})
export class ListadoPersonaComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['codigoUnidad', 'descripcion' , 'unidadMedida','Crud'];
  dataSource = new MatTableDataSource<Persona>();
  loading: boolean = false

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(private _snackBar: MatSnackBar, 
    private _personaService:PersonaService) { }
  

  ngOnInit(): void {
    this.obtenerProducto(); 
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    if(this.dataSource.data.length > 0){
      this.paginator._intl.itemsPerPageLabel = 'items por página'
    }
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  obtenerProducto(){
    this.loading = true;
    this._personaService.getlistProductos().subscribe(data => {
      this.loading = false;
      this.dataSource.data = data ;
    })
  }

  eliminarProducto(){
    this.loading = true;
    
    setTimeout(() => {
      this.loading = false;
      this._snackBar.open('El producto fue eliminado con exito', '',{
        duration: 4000,
         horizontalPosition:'left',
      });
    }, 3000);
    
  }

}
