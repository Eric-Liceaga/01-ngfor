import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

    nuevo: Personaje = {
      nombre: "Maestro Rushi",
      poder: 1000
    }

      // personajes: Personaje[] = [];
      // get personajes():Personaje[] {
      //   return this.DbzService.personajes;}

    // agregarNuevoPersonaje(argumento: Personaje) {
    // //  this.personajes.push( argumento);
    // }

    constructor() {}
      // this.personajes = this.DbzService.personajes;

  }

