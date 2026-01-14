import { Routes } from '@angular/router';
import {Home} from './core/home/home';
import {Notfound} from './core/notfound/notfound';
import { Characters } from './components/characters/characters';
import { charactersResolver } from './shared/resolvers/characters.resolvers';
import { staffResolver } from './shared/resolvers/staff.resolvers';
import { charactersResolverD } from './shared/resolvers/characters-detail.resolvers';
import { housesResolver } from './shared/resolvers/house.resolvers';
import { spellsResolver } from './shared/resolvers/spell.resolvers';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' }, // Eager.
  {
    path: 'characters', // Lazy-loading.
    children: [
      {
        path: '',
        loadComponent: () => import('./components/characters/characters')
          .then(component => component.Characters),
        title: 'Characters',
        canActivate: [authGuard],
        data: {
          section: 'Harry Potter',
          breadcrumb: 'Characters'
        },
        resolve :{characters:charactersResolver}
      },
      {
        path: ':id', loadComponent: () => import('./components/character-detail/character-detail').then(component => component.CharacterDetail),
        title: 'Character Detail',
        canActivate: [authGuard],
        resolve:{charaId:charactersResolverD}
      }
    ],
  },
  {
    path: 'houses', // Lazy-loading.
    children: [
      {
        path: '',
        loadComponent: () => import('./components/house/house')
          .then(component => component.House),
        title: 'Houses',
        canActivate: [authGuard],
        data: {
          section: 'Harry Potter',
          breadcrumb: 'Houses'
        },
      },
      {
        path: ':id', loadComponent: () => import('./components/house-detail/house-detail').then(component => component.HouseDetail),
        title: 'House contente',
        canActivate: [authGuard],
        resolve :{houses:housesResolver}
      }
    ],
  },
  {
    path: 'staff',
    loadComponent: () => import('./components/staff/staff').then(component => component.Staff),
    title: 'HP - Staff',
    data: {
      section: 'Harry Potter',
      breadcrumb: 'Staff'
    },
    resolve :{staffs:staffResolver}
  },
  {
    path: 'spells',
    loadComponent: () => import('./components/spell/spell').then(component => component.Spell),
    title: 'HP - spells',
    data: {
      section: '',
      breadcrumb: 'Spell'
    },
    resolve :{spells:spellsResolver}
  },
  { path: '**', component: Notfound, title: 'Not Found'}
];
