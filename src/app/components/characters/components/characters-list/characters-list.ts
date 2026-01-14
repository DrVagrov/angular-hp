import {Component, inject, input} from '@angular/core';
import {CharacterModel} from '../../../../shared/models/character.model';
import {Router, RouterLink} from '@angular/router';


@Component({
  selector: 'app-characters-list',
  imports: [
    RouterLink
  ],
  templateUrl: './characters-list.html',
  styleUrl: './characters-list.scss',
})
export class CharactersList {
  private router = inject(Router);
  // Mode signal.
  characters = input.required<CharacterModel[]>();
  hoverVolume = 0.1;
  private hoverAudio = new Audio('assets/audio/pickupCoin.wav');
  private houseAudioMap = new Map<string, HTMLAudioElement>([
    ['Gryffindor', new Audio('assets/audio/Griffon.mp3')],
    ['Slytherin', new Audio('assets/audio/Sliv.mp3')],
    ['Ravenclaw', new Audio('assets/audio/RavenClaw.mp3')],
    ['Hufflepuff', new Audio('assets/audio/door-knocking-44953.mp3')],
  ]);

  protected goToCharacterDetail(id: string, house?: string) {
    this.playHouseSound(house);
    this.router.navigate(['/characters', id]);
  }

  protected playHoverSound() {
    this.hoverAudio.volume = this.clampVolume(this.hoverVolume);
    this.hoverAudio.currentTime = 0;
    void this.hoverAudio.play();
  }

  private playHouseSound(house?: string) {
    const audio = house ? this.houseAudioMap.get(house) : undefined;
    if (!audio) {
      return;
    }
    audio.currentTime = 0;
    void audio.play();
  }

  private clampVolume(value: number) {
    return Math.min(1, Math.max(0, value));
  }
}
