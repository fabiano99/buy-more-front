import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produtos/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produtos/produto/produto.model';

@Component({
  selector: 'bm-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  cadastro: Produto
  constructor(private produtoService: ProdutoService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }

  cadastrar(produto:any){
    console.log(produto)
    this.produtoService.cadastrar(produto).subscribe(cadastro => this.cadastro = cadastro)
    this.router.navigate(['/'])
    
  }

}
