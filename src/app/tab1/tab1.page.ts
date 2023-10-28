import { FavoritosService } from './../favoritos.service';
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
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

  constructor(public carritoService: CarritoService, public favoritosService: FavoritosService, public toastController: ToastController) {
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
      this.favoritosService.isFavorito[product.name] = false;
    });
  }

  async mostrarToast() {
    const toast = await this.toastController.create({
      message: 'Producto agregado al carrito',
      duration: 2300, // Duración en milisegundos (3 segundos en este caso)
      position: 'top' // Puedes ajustar la posición según tus necesidades
    });
    toast.present();
  }

  async fav(isAdded: boolean) {
  const message = isAdded
    ? 'Producto agregado a favoritos'
    : 'Producto quitado de favoritos';
  const toast = await this.toastController.create({
    message: message,
    duration: 2300,
    position: 'top'
  });
  toast.present();
}
  

  public filterProducts():void {
    console.log(this.filter);
    this.productsFound = this.products.filter(
      item => {
        return this.filter.includes(item.type);
      });
  }

  public insertProduct(product: product){
    this.mostrarToast();
    this.carritoService.insertProduct(product);
  }

  agregarAFavoritos(product: any) {
    if (!this.favoritosService.isFavorito[product.name]) {
      // Agregar el producto a la lista de favoritos si no lo está
      this.favoritosService.isFavorito[product.name] = true;
      this.favoritosService.favoritos.push(product);
      this.fav(true); // Producto agregado a favoritos
    } else {
      // Eliminar el producto de la lista de favoritos si se quita como favorito
      this.favoritosService.isFavorito[product.name] = false;
      const index = this.favoritosService.favoritos.findIndex(fav => fav.name === product.name);
      if (index !== -1) {
        this.favoritosService.favoritos.splice(index, 1);
      }
      this.fav(false); // Producto quitado de favoritos
    }
  }

}