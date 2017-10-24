import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public encerrarJogo(tipo: string): void {
    if (tipo === 'derrota') {
      alert('você se fudeu');
    } else {
      alert('parabens');
    }
  }
}
