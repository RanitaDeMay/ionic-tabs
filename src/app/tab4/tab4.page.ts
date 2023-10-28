import { ComprasService } from './../compras.service';
import { compra } from './../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page {
  public compras: compra[] = [];

  constructor(public comprasService: ComprasService) {
    this.compras = this.comprasService.getCompras();
  }
}
