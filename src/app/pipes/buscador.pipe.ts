import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {


  transform(array: any[], texto: string, columna: string): any[] {
    if (texto == '') {
      return array;
    }
    texto = texto.toLowerCase();
    return array.filter(categoria => {
      /*if (categoria.categoria_producto.length > 0) {
        return categoria.categoria_producto.filter(producto => {
          if (producto.producto_general.length > 0) {
            producto.producto_general.filter(subproducto => {
              if (subproducto) {
                if (subproducto.productos_especificos)
                  subproducto.productos_especificos.filter(especifico => {
                    return especifico[columna].toLowerCase().includes(texto)
                  })
                else
                  return producto[columna].toLowerCase().includes(texto)
              } else
                return subproducto[columna].toLowerCase().includes(texto)
            })
          } else
            return producto[columna].toLowerCase().includes(texto)
        })
      } else*/
      return categoria[columna].toLowerCase().includes(texto) || categoria['description'].toLowerCase().includes(texto)
    })
  }

}
