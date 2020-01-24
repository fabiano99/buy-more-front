import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../produto/produto.model';

@Component({
  selector: 'bm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  produto: Produto
  comprado: Produto

  constructor(private produtoService: ProdutoService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.produtoService.produtoById(this.route.parent.snapshot.params['codigo']).subscribe(produto=>this.produto = produto)
  }

  comprar(produto:any, form:any){
    if(form.value.qtd > produto.quantidade || form.value.qtd < 0){
      alert("Quantidade Inválida")
    }else{
    this.produtoService.comprar(produto,form.value.qtd).subscribe(comprado => this.comprado = comprado)
    this.router.navigate(['/'])
  }
    
  }

}
