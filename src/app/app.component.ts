import { Component } from '@angular/core';
import { Pokemon } from './modelos/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public primeraImagen: string = 'https://pbs.twimg.com/media/DuC77QUXcAAU1Z4.jpg';
  public gigaChad: string = 'https://static.wikia.nocookie.net/memes-pedia/images/4/4f/Gigachad.jpg/revision/latest?cb=20201122221724&path-prefix=es';
  public imagenRota: string = 'imagenxDD';
  public imagenUsuario: string = '';
  public listaPokemon: Array<Pokemon> = [

  ];
  public escucharImagenUsuario(evento: Event): void {
    const quienFue = evento.target as HTMLInputElement;
    this.imagenUsuario = quienFue.value;
  }
  public guardarPokemon(nuevo: Pokemon): void {
    const id = this.listaPokemon.length + 1;
    nuevo.idPk = id;
    this.listaPokemon.push(nuevo);
  }
}
