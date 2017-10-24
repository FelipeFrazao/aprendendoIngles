import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracaoCheio: string = 'fa fa-heart fa-2x';
  public coracaoVazio: string = 'fa fa-heart-o fa-2x';

  @Input() public tentativas: number;
  public coracoes: Coracao [] = [
    new Coracao(true),  new Coracao(true), new Coracao(true)
  ];
  constructor() {}

  ngOnChanges() {
    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
}

  ngOnInit() {
  }
}

export class Coracao {
  constructor(public cheio: boolean, public coracaoCheio: string = 'fa fa-heart fa-2x',
              public coracaoVazio: string = 'fa fa-heart-o fa-2x') {}

  public exibeCoracao(): string {
    if (this.cheio) {
      return this.coracaoCheio;
    } else {
      return this.coracaoVazio;
    }
      }
}
