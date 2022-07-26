import { Component } from "@angular/core";

@Component({
    selector: 'contador-app',
    template: 
    `
        <h1> {{ title }} en base {{ base }} </h1>

        <button (click)="calcular('-')">-{{base}}</button>

        {{ contador }} 

        <button (click)="calcular('+')">+{{base}}</button>
    `
})
export class ContadorComponent{
    public title: string = 'Contador';
    public contador: number = 0;
    public base : number = 5;

    calcular(value: string){
        this.contador -= value.match('-') ?  this.base : -this.base;
    }
}