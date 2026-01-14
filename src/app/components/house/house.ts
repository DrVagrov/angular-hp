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


selectHouse(house: string) {
  console.log('House selected:', house);
  // Ici tu peux rediriger, sauvegarder ou jouer un son
}
  protected goToHouseDetail(id: string) {
    this.router.navigate(['/houses', id]);
  }
}
