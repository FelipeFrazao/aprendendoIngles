// Importando componentes e modulos
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
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
      // troca a rodada
      this.rodada++;

      // progresso
      this.progresso = this.progresso + (100 / this.frases.length);

      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      } else {
        // atualiza a frase da rodada
        this.atualizaRodada();
      }

    } else {
      alert('errou meu chapa');
      // reduzir uma vida
      this.tentativas --;
      this.tentativas === -1 ? this.encerrarJogo.emit('derrota') : console.log('nada');
    }
  }

  public atualizaRodada(): void {

    // define a frase da rodada
    this.rodadaFrase = this.frases[this.rodada];

    // limpar o campo resposta
    this.resposta = '';
  }

}
