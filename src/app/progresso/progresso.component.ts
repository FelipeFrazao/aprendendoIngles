import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  // Recebe o valor da barra de progresso
 @Input() public progresso: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
