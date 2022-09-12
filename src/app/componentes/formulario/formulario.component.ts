import { Component, Output, EventEmitter } from '@angular/core';
import { Pokemon, TipoPokemon } from './../../modelos/pokemon';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  @Output() public rescate = new EventEmitter<Pokemon>();

  public pokemon: Pokemon = {
    nombre: '',
    foto: '',
    descripcion: '',
    tipo: 'Planta'
  }
  public cambiarNombre(evento: Event): void {
    const responsable = evento.target as HTMLInputElement;
    this.pokemon.nombre = responsable.value;
  }
  public cambiarFoto(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.pokemon.foto = elemento.value;
  }
  public cambiarDescripcion(evento: Event): void {
    const elemento = evento.target as HTMLInputElement;
    this.pokemon.descripcion = elemento.value;
  }

  public cambiarTipo(evento: Event): void {
    const elemento = evento.target as HTMLSelectElement;
    this.pokemon.tipo = elemento.value as TipoPokemon;
  }

  public guardar(): void {
    // Crear una copia
    const copia: Pokemon = { ...this.pokemon };
    // Emitir el evento
    this.rescate.emit(copia);
    // Vaciar el formulario
    this.pokemon.foto = '';
    this.pokemon.descripcion = '';
    this.pokemon.nombre = '';
    this.pokemon.tipo = 'Planta';
  }
}
