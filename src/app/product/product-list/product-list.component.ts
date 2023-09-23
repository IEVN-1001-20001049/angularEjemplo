import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //directivas *ngif

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

productos:IProductos[]=[
  {
    "productoId":1,
    "Modelo":"Sentra",
    "Descripcion":"4 puertas famiiar",
    'year':"Febrero 3 2020",
    "Precio":120000,
    "Marca":"NISSAN",
    "Color":"Morado",
    "imagenUrl": "https://wieck-nissanao-production.s3.amazonaws.com/photos/66cb2727ffa55918878048bc9071e730749b4cb0/preview-928x522.jpg"
  },
  {
    "productoId":2,
    "Modelo":"A4",
    "Descripcion":"4 puertas famiiar",
    'year':"Febrero 3 2021",
    "Precio":200000,
    "Marca":"AUDI",
    "Color":"Blanco",
    "imagenUrl": "https://img.remediosdigitales.com/d46bf6/audi-a4-2020-precio-mexico_/1366_2000.jpg"
  },
  {
    "productoId":3,
    "Modelo":"Rio",
    "Descripcion":"2 puertas famiiar",
    'year':"Marzo 5 2022",
    "Precio":150000,
    "Marca":"KIA",
    "Color":"Azul",
    "imagenUrl": "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/rio-YB/discover/kia-rio-gls-lx-my22-trim.png"
  }
]
}
