import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'

import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';
import { TabsPage } from '../../tabs/tabs.page';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  produto: Produto;
  confPws: string;

  constructor(
    public alertController: AlertController,
    private produtoService: ProdutoService,
    private router: Router,
    private tabs:TabsPage
  ) {

  }

  ngOnInit(): void {
    this.produto = new Produto;
  }

  formDados(form) {
    if (form.valid) {
      this.addCliente(this.produto) ? form.reset() : null;
    }
  }

  addCliente(produto: Produto): boolean {
    this.produtoService.addCliente(produto)
      .subscribe(
        ok => {
          this.presentAlert("AVISO", "Cadastrado", "success");
          this.produto = new Produto;
          this.confPws = "";
          this.router.navigate(['/']);
          this.tabs.atualizarItens();
        },
        erro => {
          this.presentAlert("ERRO", "Não foi possivel cadastrar o cliente", "danger");
          return false;
        }
      );
    return true
  }


  //Cria a função para gera o alerta
  async presentAlert(tipo: string, texto: string, cor: string) {
    const alert = await this.alertController.create({
      header: tipo,
      //subHeader: 'Subtitle',
      message: texto,
      cssClass: cor,
      buttons: ['OK']
    });

    await alert.present();
  }

}

