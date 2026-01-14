import { ResolveFn } from "@angular/router";
import { CharacterService } from "../services/characters/characters.service";
import { inject } from "@angular/core";
import { SpellModel } from "../models/spell.model";
import { firstValueFrom, map } from "rxjs";
import { SpellsService } from "../services/spell/spell.service";

export const spellsResolver : ResolveFn<SpellModel[]> = 
    ()=>inject(SpellsService).getAllSpells();
