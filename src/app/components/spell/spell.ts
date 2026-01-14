import { Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { SpellModel } from '../../shared/models/spell.model';
import { SpellsList } from './components/spells-list/spells-list';

@Component({
  selector: 'app-spell',
  standalone: true, // <-- important si tu utilises imports
  imports: [SpellsList], // <-- CommonModule ajouté
  templateUrl: './spell.html',
  styleUrls: ['./spell.scss'], // <-- correction de styleUrls
})
export class Spell {

  private titleService = inject(Title);

  private activeRoute = inject(ActivatedRoute);
  private routeData = toSignal(this.activeRoute.data, {
    initialValue: this.activeRoute.snapshot.data
  });

  protected spells = computed(()=>this.routeData()['spells']);
  
  // Exemple de méthode

  protected section = computed(() => this.routeData()['section']);
  protected breadcrumb = computed(() => this.routeData()['breadcrumb']);

   constructor() {
    effect(() => {
      this.titleService.setTitle('')
      console.log(this.spells());
    })
  }

}
