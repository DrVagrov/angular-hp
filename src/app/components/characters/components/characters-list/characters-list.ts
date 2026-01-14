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
  hoverVolume = 0.7;
  private hoverAudio = new Audio('assets/audio/pickupCoin.wav');
  private hoverDeadAudio = new Audio('assets/audio/pickupCoinDown.wav');
  
  protected goToCharacterDetail(id: string, house?: string) {
    this.router.navigate(['/characters', id]);
  }

  protected playHoverSound(alive?: boolean) {
    const audio = alive === false ? this.hoverDeadAudio : this.hoverAudio;
    audio.volume = this.clampVolume(this.hoverVolume);
    audio.currentTime = 0;
    void audio.play();
  }


  private clampVolume(value: number) {
    return Math.min(1, Math.max(0, value));
  }
}
