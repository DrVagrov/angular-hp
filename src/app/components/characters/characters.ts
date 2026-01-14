import { Component, inject, computed} from '@angular/core';
import {CharacterService} from '../../shared/services/characters/characters.service';
import {CharactersList} from './components/characters-list/characters-list';
import { AddCharacter } from './components/add-character/add-character';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import { SuffixPipe } from '../../shared/pipes/suffix-pipe';
import { HoverCardDirective } from '../../shared/directives/hover-card.directive';


@Component({
  selector: 'app-characters',
  imports: [
    CharactersList,
    AddCharacter,
    SuffixPipe,
    HoverCardDirective
  ],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters {

  private characterService = inject(CharacterService);
  private activatedRoute = inject(ActivatedRoute);

  
  private routeData = toSignal(this.activatedRoute.data, {
    initialValue: this.activatedRoute.snapshot.data
  });

  protected characters = computed(()=> this.routeData()['characters'])

  protected section = computed(() => this.routeData()['section']);
  protected breadcrumb = computed(() => this.routeData()['breadcrumb']);
}
