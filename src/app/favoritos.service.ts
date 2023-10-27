import { Injectable } from '@angular/core';
import { product } from './models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  public favoritos: product[] = [];
  isFavorito: { [key: string]: boolean } = {};

  constructor() { }

  getFavoritos(){
    return this.favoritos;
  }

  agregarAFavoritos(product: product) {
    if (!this.isFavorito[product.name]) {
      // Agregar el producto a la lista de favoritos si no lo está
      this.favoritos.push(product);
    } else {
      // Eliminar el producto de la lista de favoritos si se desmarca como favorito
      const index = this.favoritos.findIndex(fav => fav.name === product.name);
      if (index !== -1) {
        this.favoritos.splice(index, 1);
      }
    }

    // Cambiar el estado del botón
      this.isFavorito[product.name] = !this.isFavorito[product.name];
  }
}