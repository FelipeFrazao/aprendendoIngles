import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoCheio: string = 'fa fa-heart fa-2x';
  public coracaoVazio: string = 'fa fa-heart-o fa-2x';
  constructor() { }

  ngOnInit() {
  }

}
