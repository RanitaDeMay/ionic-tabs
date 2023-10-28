import { ComprasService } from './../compras.service';
import { CarritoService } from './../carrito.service';
import { Component } from '@angular/core';
import { carrito } from '../models/product.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public carritos: carrito[] = [];
  public suma: number = 0;

  constructor(public carritoService: CarritoService, public comprasService: ComprasService, public toastController: ToastController) {  }
  
  async compraToast() {
    const toast = await this.toastController.create({
      message: 'Compra realizada con éxito',
      duration: 2000, // Duración en milisegundos (3 segundos en este caso)
      position: 'top' // Puedes ajustar la posición según tus necesidades
    });
    toast.present();
  }

  comprar(){
    this.compraToast();
    this.comprasService.agregarACompras();
  }
}