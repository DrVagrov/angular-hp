import { Component, effect, inject, input } from '@angular/core';
import { SpellModel } from '../../../../shared/models/spell.model';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-spells-list',
  imports: [],
  templateUrl: './spells-list.html',
  styleUrl: './spells-list.scss',
})
export class SpellsList {

  private titleService = inject(Title);
  private router = inject(Router);
  // Mode signal.
  spells = input.required<SpellModel[]>();

 constructor() {
    effect(() => {
      this.titleService.setTitle('Spells');
      console.log(this.spells());
    })
  }

getShortDescription(id:number,maxLength: number = 50): string {
    const spell:SpellModel=this.spells()![id];
    if (spell.description.length > maxLength) {
      return spell.description.substring(0, maxLength) + '...';
    }
    return spell.description;
  }
}
