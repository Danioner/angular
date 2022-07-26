import { Component } from "@angular/core";

@Component({
    selector: 'heroe-app',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = "Spiderman";
    edad: number = 30;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }
    
    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): string{
        return this.nombre = "Ironman";
    }

    cambiarEdad(): number {
        return this.edad = 45;
    }
}