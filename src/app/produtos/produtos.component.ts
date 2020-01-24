import { Component, OnInit } from '@angular/core';
import { Produto } from './produto/produto.model';
import { ProdutoService } from './produtos.service';

@Component({
  selector: 'bm-produtos',
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = undefined
  produtosNome: Produto[] = undefined

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.produtos().subscribe(produtos=>this.produtos = produtos)

  }
  produtoNome(nome:any){
    this.produtoService.produtoByNome(nome).subscribe(produtos=>this.produtos = produtos)
  }
}
