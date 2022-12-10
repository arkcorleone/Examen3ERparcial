import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



//componentes
import { AgregarEditarPersonaComponent } from './components/agregar-editar.persona/agregar-editar.persona.component';
import { ListadoPersonaComponent } from './components/listado-persona/listado-persona.component';
import { VerPersonaComponent } from './components/ver-persona/ver-persona.component';

const routes: Routes = [
  { path: '', redirectTo: 'listadoProducto', pathMatch: 'full'},
  { path: 'listadoProducto', component:ListadoPersonaComponent},
  { path: 'agregarProducto', component:AgregarEditarPersonaComponent},
  { path: 'verProducto/:id', component:VerPersonaComponent},
  { path: 'editarProducto/:id', component:AgregarEditarPersonaComponent},
  { path: '**', redirectTo: 'listadoProducto', pathMatch: 'full'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
