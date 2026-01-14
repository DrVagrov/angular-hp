import {Component, computed, effect, inject, Signal} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {CharacterService} from '../../shared/services/characters/characters.service';
import {CharacterModel} from '../../shared/models/character.model';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { firstValueFrom, map, switchMap } from 'rxjs';
import { SuffixPipe } from '../../shared/pipes/suffix-pipe';
import { HoverCardDirective } from '../../shared/directives/hover-card.directive';

@Component({
  selector: 'app-character-detail',
  imports: [SuffixPipe, HoverCardDirective],
  templateUrl: './character-detail.html',
  styleUrl: './character-detail.scss',
})
export class CharacterDetail {
  private titleService = inject(Title);

  private activeRoute = inject(ActivatedRoute);
  private routeData = toSignal(this.activeRoute.data, {
    initialValue: this.activeRoute.snapshot.data
  });
  private obsChara= computed(()=>this.routeData()['charaId']);
  protected character =this.obsChara;
 
  imge = 'assets/images/Command_Crab.jpg';

  constructor() {
    effect(() => {
      this.titleService.setTitle('chara detail: '+this.character()![0].name)
      console.log(this.character()![0]);
    })
  }
  
}
