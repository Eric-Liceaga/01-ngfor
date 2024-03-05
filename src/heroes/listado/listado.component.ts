import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {

  title = 'ngfor';
  heroes: string[] = ['spider','iron', 'hulk', 'aqua'];
  heroeb: string = '';
  noborrado: string = '';

  borrarh
  () {

    this.heroeb = this.heroes.shift() || '';

  }

}
