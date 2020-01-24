import { Component, OnInit } from '@angular/core';
import { Produto } from '../../produto/produto.model';
import { ProdutoService } from '../../produtos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bm-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  alterado: Produto
  produto: Produto
  apagado: Produto
  constructor(private produtoService: ProdutoService, private route:ActivatedRoute,
               public router:Router) { }

  ngOnInit() {
    this.produtoService.produtoById(this.route.parent.snapshot.params['codigo']).subscribe(produto=>this.produto = produto)
  }

  alterar(produto:any){
    console.log(produto)
    this.produtoService.alterar(produto).subscribe(alterado => this.alterado = alterado)

    this.router.navigate([`/produtos`])
    
  }

  apagar(codigo:any){
    console.log(codigo)
    this.produtoService.apagar(codigo).subscribe(apagado => this.apagado = apagado)
    
  }

}
