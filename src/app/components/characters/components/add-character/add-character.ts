import { Component, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterModel, Gender, House, Species } from '../../../../shared/models/character.model';
import { Wand } from '../../../../shared/models/wand.model';

@Component({
  selector: 'app-add-character',
  imports: [FormsModule],
  templateUrl: './add-character.html',
  styleUrl: './add-character.scss',
})
export class AddCharacter {
  protected id: CharacterModel['id'] = '';
  protected name: CharacterModel['name'] = '';
  protected alternate_names: CharacterModel['alternate_names'] = [];
  protected species: CharacterModel['species'] = 'human';
  protected gender: CharacterModel['gender'] = 'male';
  protected house: CharacterModel['house'] = 'Gryffindor';
  protected dateOfBirth: CharacterModel['dateOfBirth'] = null;
  protected yearOfBirth: CharacterModel['yearOfBirth'] = null;
  protected wizard: CharacterModel['wizard'] = false;
  protected ancestry: CharacterModel['ancestry'] = '';
  protected eyeColour: CharacterModel['eyeColour'] = '';
  protected hairColour: CharacterModel['hairColour'] = '';
  protected wand: CharacterModel['wand'] = { wood: '', core: '', length: null };
  protected patronus: CharacterModel['patronus'] = '';
  protected hogwartsStudent: CharacterModel['hogwartsStudent'] = false;
  protected hogwartsStaff: CharacterModel['hogwartsStaff'] = false;
  protected actor: CharacterModel['actor'] = '';
  protected alternate_actors: CharacterModel['alternate_actors'] = [];
  protected alive: CharacterModel['alive'] = true;
  protected image: CharacterModel['image'] = '';

  protected houses: House[] = ['Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff'];
  protected genders: Gender[] = ['male', 'female'];
  protected speciesOptions: Species[] = [
    'human',
    'half-giant',
    'dog',
    'owl',
    'werewolf',
    'ghost',
    'goblin',
    'giant',
    'house-elf',
  ];

  //validateur
  get nameValid(): boolean {
    return this.name.trim().length > 2;
  }

  get actorValid(): boolean {
    return this.actor.trim().length > 2;
  }

  get formValid(): boolean {
    return this.nameValid && this.actorValid;
  }

  protected toggleHogwartsStudent(checked: boolean): void {
    this.hogwartsStudent = checked;
    if (checked) {
      this.hogwartsStaff = false;
    }
  }

  protected toggleHogwartsStaff(checked: boolean): void {
    this.hogwartsStaff = checked;
    if (checked) {
      this.hogwartsStudent = false;
    }
  }

  //submit
  protected submit(): void {
    const character: CharacterModel = {
      id: this.id,
      name: this.name.trim(),
      alternate_names: this.alternate_names,
      species: this.species,
      gender: this.gender,
      house: this.house,
      dateOfBirth: this.dateOfBirth,
      yearOfBirth: this.yearOfBirth,
      wizard: this.wizard,
      ancestry: this.ancestry,
      eyeColour: this.eyeColour,
      hairColour: this.hairColour,
      wand: { ...this.wand },
      patronus: this.patronus,
      hogwartsStudent: this.hogwartsStudent,
      hogwartsStaff: this.hogwartsStaff,
      actor: this.actor.trim(),
      alternate_actors: this.alternate_actors,
      alive: this.alive,
      image: this.image,
    };

    console.log('New character', character);
  }
}

