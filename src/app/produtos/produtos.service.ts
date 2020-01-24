import { Produto } from "./produto/produto.model";
import { BM_API } from "../app.api";
import { Injectable } from "@angular/core";
import { Http, RequestMethod, Request, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from "../app.error-handler";


@Injectable()
export class ProdutoService{
	
	constructor(private http: Http){

	}

	produtos(): Observable<Produto[]>{
		return this.http.get(`${BM_API}/produtos`).map(response=>response.json())
		.catch(ErrorHandler.handleError)
	}

	produtoById(codigo:string): Observable<Produto>{
		return this.http.get(`${BM_API}/produtos/${codigo}`).map(response=>response.json())
		.catch(ErrorHandler.handleError)
	}
	produtoByNome(nome:string): Observable<Produto[]>{
		return this.http.get(`${BM_API}/produtos/nome/${nome}`).map(response=>response.json())
		.catch(ErrorHandler.handleError)
	}

	cadastrar(produto:any): Observable<Produto>{
		const headers = new Headers()
		headers.append('Content-Type','application/json')

		return this.http.post(`${BM_API}/produtos`,JSON.stringify(produto),new RequestOptions({headers:headers})).map(response=>response.json())
		.catch(ErrorHandler.handleError)
	}

	alterar(produto:any): Observable<Produto>{
		const headers = new Headers()
		headers.append('Content-Type','application/json')

		return this.http.post(`${BM_API}/produtos/alterar/${produto.codigo}`,JSON.stringify(produto),new RequestOptions({headers:headers})).map(response=>response.json())
		.catch(ErrorHandler.handleError)
	}
	comprar(produto:any, qtd: any): Observable<Produto>{
		const headers = new Headers()
		headers.append('Content-Type','application/json')

		produto.quantidade = produto.quantidade - qtd

		return this.http.post(`${BM_API}/produtos/comprar/${produto.codigo}`,JSON.stringify(produto),new RequestOptions({headers:headers})).map(response=>response.json())
		.catch(ErrorHandler.handleError)
	}

	apagar(produto:any): Observable<Produto>{
		const headers = new Headers()
		headers.append('Content-Type','application/json')

		return this.http.post(`${BM_API}/produtos/apagar/${produto.codigo}`,JSON.stringify(produto),new RequestOptions({headers:headers})).map(response=>response.json())
		.catch(ErrorHandler.handleError)
	}

	
}