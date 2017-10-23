import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoCheio: string = 'fa fa-heart fa-2x';
  public coracaoVazio: string = 'fa fa-heart-o fa-2x';

  @Input() public tentativas: number;
  public coracoes: Coracao [] = [
    new Coracao(true),  new Coracao(true), new Coracao(true)
  ];
  constructor() {}

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
