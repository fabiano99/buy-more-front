import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produtos/produto/produto.component'
import { ProdutoService } from './produtos/produtos.service';
import { ProdutoDetailComponent } from './produtos/produto-detail/produto-detail.component';
import { MenuComponent } from './produtos/produto-detail/menu/menu.component';
import { MenuItemComponent } from './produtos/produto-detail/menu-item/menu-item.component';
import { EditComponent } from './produtos/produto-detail/editar/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProdutosComponent,
    ProdutoComponent,
    ProdutoDetailComponent,
    MenuComponent,
    MenuItemComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
