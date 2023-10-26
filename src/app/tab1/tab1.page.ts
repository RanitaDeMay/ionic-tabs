import { Component } from '@angular/core';
import { product } from '../models/product.model';
import { CarritoService } from '../carrito.service';

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
  isFavorito: { [key: string]: boolean } = {};

  constructor(public carritoService: CarritoService) {
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

    //Cada estado de favorito inicializa en falso
    this.products.forEach(product => {
      this.isFavorito[product.name] = false;
    });
  }

  public filterProducts():void {
    console.log(this.filter);
    this.productsFound = this.products.filter(
      item => {
        return this.filter.includes(item.type);
      });
  }

  public insertProduct(product: product){
    this.carritoService.insertProduct(product);
  }

  agregarAFavoritos(product: product) {
    // Agregar el producto a la lista de favoritos
    //this.favoritos.push(producto);

    // Cambiar el estado del botón
      this.isFavorito[product.name] = !this.isFavorito[product.name];
  }
}
