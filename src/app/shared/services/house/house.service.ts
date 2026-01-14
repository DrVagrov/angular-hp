import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterModel } from '../../models/character.model';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HouseService {

  private httpClient = inject(HttpClient);
  
  getCharaFromHouse(id:string):Observable<CharacterModel[]>
  {
    return this.httpClient.get<CharacterModel[]>(environment.baseUrl + '/characters/house/' + id);
  }
}
