import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';
import { Item } from '../interfaces/item.interface';


@Injectable({
  providedIn: 'root'
})
export class TiendaService{

  baseUrl = 'http://localhost:3000';

  private myList: Item[] = [];

  private myCart = new BehaviorSubject<Item[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor(private httpclient: HttpClient) { }


  getAllProducts(): Observable<Producto[]> {
    const response = this.httpclient.get<Producto[]>(`${this.baseUrl}/productos`);
    return response;
  }

  addProduct(producto: Item) {

    // debugger;
    if (this.myList.length === 0) {
      producto.cantidad = 1;
      this.myList.push(producto);
      //emito la lista para los que estén escuchando
      this.myCart.next(this.myList);

    } else {
      const productoMod = this.myList.find((element) => {
        return element.producto.idproducto === producto.producto.idproducto
      })
      if (productoMod) {
        productoMod.cantidad = productoMod.cantidad + 1;
        this.myCart.next(this.myList);
      } else {
        producto.cantidad = 1;
        this.myList.push(producto);
        //ojo hay que emitir la lista!!
        this.myCart.next(this.myList);
      }

    }
  }

  findProductById(id: number) {
    return this.myList.find((element) => {
      return element.producto.idproducto === id
    })

  }

  deleteProduct(id: number) {

    this.myList = this.myList.filter((product) => {
      return product.producto.idproducto != id
    })
    this.myCart.next(this.myList);


  }
  totalCart() {
    const total = this.myList.reduce(function (acc, product) { return acc + (product.cantidad * product.producto.precio); }, 0)
    return total
  }

  realizarCompra(){
    
  }

}
