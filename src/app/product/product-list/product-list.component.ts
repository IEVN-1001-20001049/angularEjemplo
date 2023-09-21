import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //directivas *ngif
productos:any[]=[
  {
    "productoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas famiiar",
    'year':"Febrero 3 2020",
    "Precio":120000,
    "Marca":"NISSAN",
    "Color":"Morado",
    "imagenUrl": "datos pendientes"
  },
  {
    "productoId":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas famiiar",
    'year':"Febrero 3 2021",
    "Precio":200000,
    "Marca":"AUDI",
    "Color":"Blanco",
    "imagenUrl": "datos pendientes"
  },
  {
    "productoId":3,
    "Modelo":"Rio",
    "Descripcion":"2 puertas famiiar",
    'year':"Marzo 5 2022",
    "Precio":150000,
    "Marca":"KIA",
    "Color":"Azul",
    "imagenUrl": "datos pendientes"
  }
]
}
