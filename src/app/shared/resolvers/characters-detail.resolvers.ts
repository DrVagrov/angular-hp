import { ResolveFn } from "@angular/router";
import { CharacterService } from "../services/characters/characters.service";
import { inject } from "@angular/core";
import { CharacterModel } from "../models/character.model";
import { firstValueFrom, map } from "rxjs";

export const charactersResolverD : ResolveFn<CharacterModel[]> = 
    (route)=>{
        console.log("hellothere",route);
    const charid  =  route.paramMap.get('id')!;
    console.log("id : "+charid);
    const l = inject(CharacterService).getCharacterById(charid);
    console.log(l);
    return l;
}