// Importando componentes e modulos
import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';
import {_if} from 'rxjs/observable/if';

// Declarando component
@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})

export class PainelComponent implements OnInit {

  // declaração de variaveis
  public frases: Frase [] = FRASES;
  public resposta: string;

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit() {
  }
  // Logica para pegar a resposta
  public pegaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }
  // Logica para verificar a resposta digitada
  public verificaResposta(): void {
    if (this.resposta === this.rodadaFrase.fraseBr) {
      console.log('Você acertou meu chapa');
      // troca a rodada
      this.rodada++;
      // progresso
      this.progresso = this.progresso + (100 / this.frases.length);
      // atualiza a frase da rodada
      this.rodadaFrase = this.frases[this.rodada];
    } else {
      alert('errou meu chapa');
    }
}
}
