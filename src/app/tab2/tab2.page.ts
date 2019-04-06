import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';
import { ProdutoService } from '../produto/produto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

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




}
