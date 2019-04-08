import { Component } from '@angular/core';
import { ProdutoService } from '../produto/produto.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  private itens: number = 0;

  constructor(private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.atualizarItens() 
  }
  
  atualizarItens() {
    this.produtoService.getClientes()
      .subscribe(
        res => {
          this.itens = res.length
        },
        erro => {
          console.log(erro);
          this.itens = 0;
        }
      )
  }
}
