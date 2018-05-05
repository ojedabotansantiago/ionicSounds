import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ANIMALES } from "../../data/data.aninales";
import { Animal } from './../../interfaces/animal.interface';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  animales:any[] = [];
  constructor() {
    this.animales = ANIMALES.splice(0);
  }
  reproducir(animal:Animal){
    console.log(animal);
    let audio = new Audio;
    audio.src = animal.audio;

    audio.load();
    audio.play();

    animal.reproduciendo = true;
    
    setTimeout(() => {
      animal.reproduciendo = false,
      animal.duracion * 1000
    },1000);
  }

  isStop(animal:Animal) {
    return animal.reproduciendo;
  }

  isPlay(animal:Animal){
    return !animal.reproduciendo;
  }

}
