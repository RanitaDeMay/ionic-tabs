import { Component } from '@angular/core';
import { carrito, product } from '../models/product.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  public products: product[] = [];
  public productsFound: product[] = [];
  public filter = [
    'abarrotes','frutas y verduras','limpieza','farmacia'
  ];
  public carritos: carrito[] = [];
  public suma: number = 0;

  constructor() {
    this.products.push({
      name: 'Coca cola',
      photo: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'lorem ipsun dolor sit amet',
      price: 20,
      type: 'Abarrotes'
    });

    this.products.push({
      name: 'Fabuloso 300ml',
      photo: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'lorem ipsun dolor sit amet',
      price: 24,
      type: 'Limpieza'
    });

    this.products.push({
      name: 'Aguacuate Hass',
      photo: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'lorem ipsun dolor sit amet',
      price: 80,
      type: 'Frutas y verduras'
    });

    this.products.push({
      name: 'Crema hidratante',
      photo: 'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'lorem ipsun dolor sit amet',
      price: 89,
      type: 'Farmacia'
    });

    //IGUALAMOS el nuevo arreglo a products
    this.productsFound = this.products;
  }

  public filterProducts():void {
    console.log(this.filter);
    this.productsFound = this.products.filter(
      item => {
        return this.filter.includes(item.type);
      });
  }

  public insertProduct(nombre: string, precio: number, cantidad: number): void {
    // Buscar si ya existe un producto con el mismo nombre en carritos[]
    const productoExistente = this.carritos.find((carrito) => carrito.name === nombre);
    if (productoExistente) {
      productoExistente.amount += cantidad;
      productoExistente.totalPrice += precio;
    } else {
      this.carritos.push({
        name: nombre,
        price: precio,
        totalPrice: precio,
        amount: cantidad,
      });
    }

    this.totalUpdate();
  }

  public totalUpdate(){
    this.suma = 0;
    for(let carrito of this.carritos) {
      this.suma += carrito.totalPrice;
    }
  }

}
