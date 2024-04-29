import { Component } from '@angular/core';
import { TiendaService } from '../../services/tienda.service';
import { Item } from '../../interfaces/item.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  myCart$ = this.servicioTienda.myCart$;
  listaCarrito:Item[] = [];

  constructor(private servicioTienda: TiendaService) { 

    this.myCart$.subscribe((data) => {
      this.listaCarrito = data;
    });

  }

}
