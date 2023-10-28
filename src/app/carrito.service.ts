import { Injectable } from '@angular/core';
import { carrito, product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  public carritos: carrito[] = [];
  public suma: number = 0;

  constructor() { }

  getCarrito() {
    return this.carritos;
  }

  getSum(){
    const amountSum = this.carritos.reduce((sum, carrito) => sum + carrito.amount, 0);
    const totalSum = this.carritos.reduce((sum, carrito) => sum + carrito.totalPrice, 0);
    return {amount: amountSum, total: totalSum}
  }

  public insertProduct(product: product): void {
    const productoExistente = this.carritos.find((carrito) => carrito.name === product.name);
    // Buscar si ya existe un producto con el mismo nombre en carritos[]
    if (productoExistente) {
      productoExistente.amount++;
      productoExistente.totalPrice += product.price;
    } else {
      this.carritos.push({
        name: product.name,
        price: product.price,
        totalPrice: product.price,
        amount: 1,
      });
    }
    this.totalUpdate();
  }

  public totalUpdate(){
    const {total} = this.getSum();
    this.suma = total;
  }

  public clearCarrito(){
    this.carritos = [];
    this.totalUpdate();
  }
}
