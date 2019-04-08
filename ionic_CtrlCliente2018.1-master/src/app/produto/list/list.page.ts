import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';
import { TabsPage } from '../../tabs/tabs.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  private produtos$: Observable<Produto[]>;

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private tabs:TabsPage
  ) {
  }

  ngOnInit(): void {
    this.produtos$ = this.produtoService.getClientes();
  }

  remover(produto: Produto) {
    this.produtoService.deleteCliente(produto)
      .subscribe(
        ok => {
          console.log("Apagado");
          this.produtos$ = this.produtoService.getClientes();
          this.tabs.atualizarItens();
        },
        erro => {
          console.log(erro);
        });
  }

  atualizar(produto: Produto) {
    //this.clienteService.atualizar(cliente);
    this.router.navigate(['tabs/tab2', produto.id])
  }

  doRefresh(event) {
    //console.log('Begin async operation');
    this.produtos$ = this.produtoService.getClientes();
    this.tabs.atualizarItens()
    setTimeout(() => {
      //console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
