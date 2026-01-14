import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SuffixPipe } from '../../shared/pipes/suffix-pipe';
import { HoverCardDirective } from '../../shared/directives/hover-card.directive';

@Component({
  selector: 'app-house',
  imports: [SuffixPipe, HoverCardDirective],
  templateUrl: './house.html',
  styleUrl: './house.scss',
})
export class House {
  private router = inject(Router);
  private houseAudioMap = new Map<string, HTMLAudioElement>([
    ['gryffindor', new Audio('assets/audio/Griffon.mp3')],
    ['slytherin', new Audio('assets/audio/Sliv.mp3')],
    ['ravenclaw', new Audio('assets/audio/RavenClaw.mp3')],
    ['hufflepuff', new Audio('assets/audio/door-knocking-44953.mp3')],
  ]);


selectHouse(house: string) {
  console.log('House selected:', house);
  // Ici tu peux rediriger, sauvegarder ou jouer un son
}
  protected goToHouseDetail(id: string) {
    this.playHouseSound(id);
    this.router.navigate(['/houses', id]);
  }

  private playHouseSound(id: string) {
    const audio = this.houseAudioMap.get(id);
    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    void audio.play();
  }
}
