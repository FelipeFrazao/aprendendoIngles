import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variavel que vai dizer se o jogo ainda está em andamento
  public jogoEmAndamento: boolean = true;
  // Recebe a mensagem de vitoria ou derrota
  public mensagem: string ;
  // Recebe a classe para exibir mensagem de sucesso ou derrota
  public classe: string ;


  public encerrarJogo(tipo: string): void {
    this.jogoEmAndamento = false;
    if (tipo === 'derrota') {
      // Definindo a mensagem e classe de derrota
      this.mensagem = 'Você perdeu meu chapa';
      this.classe = 'alert alert-danger';
    } else {
      // Define a classe e mensagem de vitoria
      this.mensagem = 'Parabéns, você conseguiu!!!';
      this.classe = 'alert alert-success';
    }
  }
  public reinicia(): void {
    // Volta a aplicação para o estado inicial
    this.jogoEmAndamento = true;
    this.mensagem = null;
    this.classe = null;
  }
}
