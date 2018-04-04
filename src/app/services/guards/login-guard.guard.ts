import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(public _usuario: UsuarioService, public router: Router) { }

  canActivate(): boolean {
    if (this._usuario.estaLogueado()) {
      console.log('paso el gaurd');
      return true;
    } else {
      console.log('bloquedo por el guard');
      this.router.navigate(['/login']);
      return false;
    }

  }
}
