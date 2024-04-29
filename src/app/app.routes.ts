import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { ProductoComponent } from './components/producto/producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';

export const routes: Routes = [
    {path: 'inicio', component: MainComponent},
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'productos', component: CarritoComponent}
];
