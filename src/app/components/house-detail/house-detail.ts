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

  
  private routeData = toSignal(this.activatedRoute.data, {
    initialValue: this.activatedRoute.snapshot.data
  });
  protected characters = computed(()=> this.routeData()['houses'])

    constructor() {
    effect(() => {
      this.titleService.setTitle('chara from house');
      console.log(this.characters()![0]);
    })
  }
    protected goToCharacterDetail(id: string) {
    this.router.navigate(['/characters', id]);
  }
}
