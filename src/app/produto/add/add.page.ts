import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TabsPage } from '../../tabs/tabs.page';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class AddPage implements OnInit{

produto: Produto;
quant: number;



  constructor (
    public alertController: AlertController,
    private produtoService: ProdutoService,
    private router: Router,
    private tabs:TabsPage
  ) {

  }


  ngOnInit(): void {
    this.produto = new Produto;
  }

  addProduto(produto: Produto): boolean {
    this.produtoService.addProduto(produto)
      .subscribe(
        ok => {
          this.presentAlert("AVISO", "Produto Cadastrado", "success");
          this.produto = new Cliente;
          this.quant = "";
          this.router.navigate(['/']);
          this.tabs.atualizarProdutos();


        },
        erro => {
          this.presentAlert("ERRO", "Não foi possivel atualizar", "danger");
          return false;
        }
      );
    return true
  }


}
