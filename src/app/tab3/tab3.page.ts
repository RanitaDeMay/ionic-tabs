import { Component } from '@angular/core';
import { FavoritosService } from '../favoritos.service';
import { product } from '../models/product.model';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public favoritos: product[] = [];

  constructor(public favoritosService: FavoritosService, public carritoService: CarritoService) {
    this.favoritos = this.favoritosService.getFavoritos();
  }

  public insertProduct(product: product){
    this.carritoService.insertProduct(product);
  }

  agregarAFavoritos(product: product) {
    this.favoritosService.agregarAFavoritos(product);
  }
}
