import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jogoEmAndamento: boolean = true;
  public mensagem: string ;
  public classe: string ;


  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    if (tipo === 'derrota') {
      this.mensagem = 'Você perdeu meu chapa';
      this.classe = 'alert alert-danger';
    } else {
      this.mensagem = 'Parabéns, você conseguiu!!!';
      this.classe = 'alert alert-success';
    }
  }
}
