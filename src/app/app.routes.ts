import {Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetailComponent } from './produtos/produto-detail/produto-detail.component';
import { MenuComponent } from './produtos/produto-detail/menu/menu.component';
import { EditComponent } from './produtos/produto-detail/editar/edit.component';

export const ROUTES: Routes = [
	{path:'',component:HomeComponent},
	{path:'about',component:AboutComponent},
	{path:'produtos',component:ProdutosComponent},
	{path:'produtos/:codigo',component:ProdutoDetailComponent,
		children:[
			{path:'',redirectTo:'menu', pathMatch: 'full'},
			{path:'menu',component:MenuComponent},
			{path:'edit',component:EditComponent}
		]
	}
]

