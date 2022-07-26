import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroesBorrados: string[] = [];

  borrarHeroe(): void{
    let nombreHeroe = this.heroes[this.heroes.length-1];
    if( nombreHeroe != undefined ){
      console.log('Borrando el ultimo dato:', this.heroes.pop());
      this.heroesBorrados.push(nombreHeroe);
      console.log('Heroe borrado fue: ', this.heroesBorrados);
    }else{
      console.log("No queda nada mas que eliminar");
    }
  }

  resetHeroe(): void{
    this.heroes = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
    this.heroesBorrados = [];
  }
}