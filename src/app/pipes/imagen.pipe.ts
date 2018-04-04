import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagen: string, tipo: string = 'usuario'): any {
    let url = URL_SERVICIOS + '/img';
    if (!imagen) {
      return url + '/usuarios/none';
    }
    if (imagen.indexOf('https') >= 0) {
      return imagen;
    }

    switch (tipo) {
      case 'usuario':
        url += '/usuarios/' + imagen;
        break;
      case 'medico':
        url += '/medicos/' + imagen;
        break;
      case 'hospital':
        url += '/medicos/' + imagen;
        break;
      default:
        console.log('el tipo de imagen no existe');
        url += '/usuarios/none';
    }
    return url;
  }

}
