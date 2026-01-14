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
  private router = inject(Router);
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
