import { Pipe, PipeTransform } from '@angular/core';
import { IProductos } from './iproductos';

@Pipe({
  name: 'productoFilter'
})
export class ProductoFilterPipe implements PipeTransform {

  transform(value: IProductos[], args:string): IProductos[] {

    let filter:string= args ? args.toLocaleLowerCase():'';
    return filter ? value.filter((product:IProductos)=>
    product.Modelo.toLocaleLowerCase().indexOf(filter)!=-1
    ):value;
  }

}
