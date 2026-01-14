import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import { CharacterModel } from "../models/character.model";
import { HouseService } from "../services/house/house.service";

export const housesResolver : ResolveFn<CharacterModel[]> = 
    (route)=>{
        console.log("hellothere House",route);
    const houseid  =  route.paramMap.get('id')!;
    console.log("id : "+houseid);
    const l = inject(HouseService).getCharaFromHouse(houseid);
    return l;
}
