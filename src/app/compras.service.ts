import { CarritoService } from './carrito.service';
import { Injectable } from '@angular/core';
import { carrito, compra } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {
  public compras: compra[] = [];

  constructor(private carritoService: CarritoService) { }

  getCompras(){
    return this.compras;
  }

  agregarACompras(){
    const { amount, total } = this.carritoService.getSum();
    const newCompra: compra = {
      date: new Date(),
      amount: amount,
      total: total
    };

    this.compras.push(newCompra);

    this.carritoService.clearCarrito();
  }
}
