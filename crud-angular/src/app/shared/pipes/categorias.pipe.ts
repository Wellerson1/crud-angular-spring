import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorias'
})
export class CategoriasPipe implements PipeTransform {

  transform(value: string): unknown {
    switch(value) {
      case 'front-end': return 'code'
      case 'Back-end': return 'computer'
    }
    return 'code'
  }

}
