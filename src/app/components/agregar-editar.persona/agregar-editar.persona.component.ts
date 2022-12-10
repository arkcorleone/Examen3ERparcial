import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/Interfaces/persona';

@Component({
  selector: 'app-agregar-editar.persona',
  templateUrl: './agregar-editar.persona.component.html',
  styleUrls: ['./agregar-editar.persona.component.css']
})
export class AgregarEditarPersonaComponent implements OnInit {
  loading:boolean = false;
  form: FormGroup

  constructor(private fb:FormBuilder) { 
    this.form = this.fb.group({
      Código:  ['', Validators.required],
      Descripción:  ['', Validators.required],
      Unidad:  ['', Validators.required],
    })
   }

  ngOnInit(): void {
  }

  agregarProducto(){
    const codigo = this.form.value.Código;
    const persona: Persona = {
      codigoUnidad: this.form.value.Código,
      descripcion: this.form.value.Descripción,
      unidadMedida: this.form.value.Unidad,

    }
  }
}
