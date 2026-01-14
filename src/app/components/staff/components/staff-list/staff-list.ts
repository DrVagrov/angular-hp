import {Component, inject, input} from '@angular/core';
import {StaffModel} from '../../../../shared/models/staff';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  imports: [],
  templateUrl: './staff-list.html',
  styleUrl: './staff-list.scss',
})
export class StaffList {
  imge = 'assets/images/Command_Crab.jpg';
  staff = input.required<StaffModel[]>();
  hoverVolume = 0.1;
  private hoverAudio = new Audio('assets/audio/pickupCoin.wav');
  private houseAudioMap = new Map<string, HTMLAudioElement>([
    ['Gryffindor', new Audio('assets/audio/Griffon.mp3')],
    ['Slytherin', new Audio('assets/audio/Sliv.mp3')],
    ['Ravenclaw', new Audio('assets/audio/RavenClaw.mp3')],
    ['Hufflepuff', new Audio('assets/audio/door-knocking-44953.mp3')],
  ]);
  private router = inject(Router);

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
