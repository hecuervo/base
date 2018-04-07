import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../services/service.index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {
  imagenSubir: File;
  imagenTemp: string;

  constructor(
    public _subirArchivo: SubirArchivoService,
    public _modalUpload: ModalUploadService
  ) { }

  ngOnInit() {
  }

  subirImagen() {
    this._subirArchivo.subirArchivo(this.imagenSubir, this._modalUpload.tipo, this._modalUpload.id)
      .then(resp => {
        this._modalUpload.notificaciones.emit(resp);
        this.cerrarModal();
      })
      .catch(err => {
        console.log('Error en la carga', err);
      })
  }

  cerrarModal() {
    this.imagenTemp = null;
    this.imagenSubir = null;
    this._modalUpload.ocultarModal();
  }
  seleccionImagen(archivo: File) {
    if (!archivo) {
      this.imagenSubir = null;
      return;
    }
    if (archivo.type.indexOf('image') < 0) {
      swal('Soló imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = archivo;
    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);
    reader.onloadend = () => this.imagenTemp = reader.result;
  }


}
