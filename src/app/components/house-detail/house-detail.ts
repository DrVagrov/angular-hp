import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SuffixPipe } from '../../shared/pipes/suffix-pipe';
import { HoverCardDirective } from '../../shared/directives/hover-card.directive';

@Component({
  selector: 'app-house-detail',
  imports: [SuffixPipe, HoverCardDirective],
  templateUrl: './house-detail.html',
  styleUrl: './house-detail.scss',
})
export class HouseDetail {

  private activatedRoute = inject(ActivatedRoute);
  private titleService = inject(Title);
  private router = inject(Router);
  hoverVolume = 0.7;
  private hoverAudio = new Audio('assets/audio/pickupCoin.wav');
  private hoverDeadAudio = new Audio('assets/audio/pickupCoinDown.wav');

  
  private routeData = toSignal(this.activatedRoute.data, {
    initialValue: this.activatedRoute.snapshot.data,
  });
  private routeParams = toSignal(this.activatedRoute.paramMap, {
    initialValue: this.activatedRoute.snapshot.paramMap,
  });
  protected characters = computed(() => this.routeData()['houses']);
  protected houseId = computed(() => this.routeParams().get('id') ?? '');
  protected houseTitle = computed(() => this.getHouseTitle(this.houseId()));
  protected houseMotto = computed(() => this.getHouseMotto(this.houseId()));

    constructor() {
    effect(() => {
      this.titleService.setTitle(this.houseTitle());
      console.log(this.characters()![0]);
    })
  }
  protected goToCharacterDetail(id: string) {
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

  private getHouseTitle(id: string) {
    switch (id.toLowerCase()) {
      case 'gryffindor':
        return 'Maison Gryffondor 🦁';
      case 'slytherin':
        return 'Maison Serpentard 🐍';
      case 'ravenclaw':
        return 'Maison Serdaigle 🦅';
      case 'hufflepuff':
        return 'Maison Poufsouffle 🦡';
      default:
        return 'Maison';
    }
  }

  private getHouseMotto(id: string) {
    switch (id.toLowerCase()) {
      case 'gryffindor':
        return "la parole est d'argent, le griffondor";
      case 'slytherin':
        return 'Serpentard, le swag depuis Merlin';
      case 'ravenclaw':
        return "L'esprit, au-delà de toute mesure, est le plus grand trésor de l'homme";
      case 'hufflepuff':
        return 'You might belong in Hufflepuff, where they are just and loyal';
      default:
        return 'Decouvre les valeurs de la maison.';
    }
  }
}
