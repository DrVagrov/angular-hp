import { inject, Injectable } from '@angular/core';
import { SpellModel } from '../../models/spell.model';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpellsService {

    private httpClient = inject(HttpClient);

    getAllSpells() : Observable<SpellModel[]> {
       return this.httpClient.get<SpellModel[]>(environment.baseUrl + '/spells');
     }
   
  
}
