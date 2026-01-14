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
  private router = inject(Router);

  protected goToCharacterDetail(id: string) {
    this.router.navigate(['/characters', id]);
  }

  protected playHoverSound() {
    this.hoverAudio.volume = this.clampVolume(this.hoverVolume);
    this.hoverAudio.currentTime = 0;
    void this.hoverAudio.play();
  }

  private clampVolume(value: number) {
    return Math.min(1, Math.max(0, value));
  }
}
