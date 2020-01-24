import { Component, OnInit, Input } from '@angular/core';
import { Produto } from './produto.model';

@Component({
  selector: 'bm-produto',
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {

  @Input() produto: Produto

  constructor() { }

  ngOnInit() {
  }



}
