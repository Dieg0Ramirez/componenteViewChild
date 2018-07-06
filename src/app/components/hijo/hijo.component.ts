import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent {
  prueba: string = '1';
  mensaje: string = 'Este es el hijo';
  prueba2: string = '111111';
  saludo(value) {
    this.mensaje = value;
    this.prueba = value;
  }

}
