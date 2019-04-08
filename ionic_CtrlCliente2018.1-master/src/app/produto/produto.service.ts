import { Injectable } from '@angular/core';
import { HttpProduto } from '@angular/common/http'

import { Produto } from './produto.model';
import { URL_API } from '../app.api'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  produtos: Produto[];

  private urlProduto: string = URL_API + "produtos";

  constructor(
    private http: HttpProduto
  ) {
    this.produtos = [];
  }

  //CRUD --------------------------------------
  addCliente(produto: Produto): Observable<Produto> {
    //this.clientes.push(cliente);
    return this.http.post<Produto>(this.urlProduto, produto);
  }

  getClientes(): Observable<Produto[]> {
    //return this.clientes;
    return this.http.get<Produto[]>(this.urlProduto);
  }

  getCliente(id: number) {
    return this.http.get<Produto>(this.urlProduto + "/" + id);
  }

  updateCliente(produto: Produto, id: number) {
    return this.http.put<Produto>(this.urlProduto + "/" + id, produto);
  }

  deleteCliente(produto: Produto) {
    //let p = this.clientes.indexOf(cliente);
    //this.clientes.splice(p, 1)
    return this.http.delete<Produto>(this.urlProduto + "/" + produto.id);
  }

  //------------------------------------------
  validar(produto: Produto, confpws: string) {
    let erros: string = "";

    if (produto.nome == null) {
      erros += "Nome em branco. <br>";
    }
    if (produto.email == null) {
      erros += "E-mail em branco. <br>";
    }
    if (produto.pws == null) {
      erros += "Senha em Branco. <br>";
    } else if (produto.pws.length < 5) {
      erros += "Senha muito curta. <br>";
    } else if (produto.pws != confpws) {
      erros += "Senhas diferentes. <br>";
    }

    if (erros != "")
      throw erros;

    return true
  }

}
