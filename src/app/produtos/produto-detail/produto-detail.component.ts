import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produtos.service';
import { Produto } from '../produto/produto.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bm-produto-detail',
  templateUrl: './produto-detail.component.html'
})
export class ProdutoDetailComponent implements OnInit {

  produto: Produto
  constructor(private produtosService: ProdutoService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.produtosService.produtoById(this.route.snapshot.params['codigo']).subscribe(produto=>this.produto = produto)
  }

}
