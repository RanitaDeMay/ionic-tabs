import { CarritoService } from './../carrito.service';
import { Component } from '@angular/core';
import { carrito, product } from '../models/product.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public carritos: carrito[] = [];
  public suma: number = 0;

  constructor(public carritoService: CarritoService) {  }
}