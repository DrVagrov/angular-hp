import { ResolveFn } from "@angular/router";
import { CharacterService } from "../services/characters/characters.service";
import { inject } from "@angular/core";
import { CharacterModel } from "../models/character.model";

export const charactersResolver : ResolveFn<CharacterModel[]> = 
()=> inject(CharacterService).getAllCharacter();