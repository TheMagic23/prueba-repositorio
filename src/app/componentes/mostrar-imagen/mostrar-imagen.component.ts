import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-imagen',
  templateUrl: './mostrar-imagen.component.html',
  styleUrls: ['./mostrar-imagen.component.scss']
})
export class MostrarImagenComponent {
  @Input() public imagen: string = '';
  
  public imagenError: string = 'https://i.pinimg.com/originals/4d/22/ca/4d22ca8cf25a747ad3152163a0635e5f.gif';
  
  public cambiarError(): void {
    this.imagen = this.imagenError;
  }

}
