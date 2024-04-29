import { Component } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  myCart$ = this.servicioTienda.myCart$;
  listaCarrito:Item[] = [];

  constructor(private servicioTienda: TiendaService) { 

    this.myCart$.subscribe((data) => {
      this.listaCarrito = data;
    });

  }

}
