import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(public _usuario: UsuarioService, public router: Router) { }

  canActivate(): boolean {
    if (this._usuario.estaLogueado()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}
