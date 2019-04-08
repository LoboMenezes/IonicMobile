import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  produto: Produto;
  confPws: string;
  id: number = 0;
  
  constructor(
    private alertController: AlertController,
    private activeRouter: ActivatedRoute,
    private produtoService: ProdutoService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this.produto = new Produto;
    if (this.activeRouter.snapshot.paramMap.get("id") == null) {
      this.presentAlert("Erro", "Você não selecionou um cliente!", "");
    } else {
      this.id = parseInt(this.activeRouter.snapshot.paramMap.get("id"));
      this.produtoService.getCliente(this.id)
        .subscribe(dados => this.produto = dados);
    }
  }

  formDados(form) {
    if (form.valid) {
      this.updateCliente(this.produto, this.id) ? form.reset() : null;
    }
  }


  updateCliente(produto: Produto, id: number): boolean {
    this.produtoService.updateCliente(produto, id)
      .subscribe(
        ok => {
          this.presentAlert("AVISO", "Atualizado", "success");
          this.produto = new Produto;
          this.confPws = "";
          this.id = 0;
          this.router.navigate(['/']);
        },
        erro => {
          this.presentAlert("ERRO", "Não foi possivel atualizar!", "danger");
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

