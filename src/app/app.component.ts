import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'ngfor';
  heroes: string[] = ['spider','iron', 'hulk', 'aqua'];
  heroeb: string = '';
  noborrado: string = '';

  borrarh
  () {

    this.heroeb = this.heroes.shift() || '';



  }

}
