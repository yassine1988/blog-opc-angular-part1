import { Component } from '@angular/core';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title1: string = `De 2000 à aujourd’hui, la mainmise électorale de Poutine`;
  title2: string = `Séoul veut « aller de l’avant » avec Pyongyang`;
  title3: string = `Syrie : l’exode des civils de la Ghouta orientale sous les bombes`;
  content1: string = `M. Poutine n’a pas été candidat en 2008,  la Constitution n’autorisant que deux mandats consécutifs. Il a alors échangé son poste avec celui de son premier ministre, Dmitri Medvedev. Ce dernier a même failli faire mieux que lui, avec 70,28 % des voix, toujours au premier tour.`;
  content2: string = `Après une année de crise marquée par un essai nucléaire et de  multiples tirs de missiles nord-coréens, la situation s’est rapidement améliorée sur la péninsule coréenne. Il a été convenu d’une rencontre, fin avril, entre le dirigeant nord-coréen, Kim Jong-un, et le président sud-coréen progressiste, Moon Jae-in, élu en mai 2017.`;
  content3: string = `Dans un chaos total, des civils continuent de fuir la Ghouta orientale, aux portes de Damas. Epuisés, munis de maigres effets, des centaines d’habitants ont emprunté, samedi 17 mars, le corridor ouvert par les forces prorégime dans le sud de l’enclave rebelle, désormais scindée en trois parties.`;
  posts: Post[] = [
    new Post(this.title1, this.content1),
    new Post(this.title2, this.content2),
    new Post(this.title3, this.content3)
  ];
}
