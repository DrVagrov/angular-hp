import { Component, ElementRef, ViewChild } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
@ViewChild('exploreSound')
exploreSound!: ElementRef<HTMLAudioElement>;
onExplore(): void {
    const audio = this.exploreSound.nativeElement;

    audio.currentTime = 0;
    audio.volume = 0.2;

    audio.play().catch(err => {
      console.warn('Audio bloqué par le navigateur', err);
    });
  }
  @ViewChild('commenceSound')
  commenceSound!: ElementRef<HTMLAudioElement>;
  onCommence(): void {
    const audio = this.commenceSound.nativeElement;

    audio.currentTime = 0;
    audio.volume = 0.6;

    audio.play().catch(err => {
      console.warn('Audio bloqué par le navigateur', err);
    });
  }

  @ViewChild('spellSound')
  spellSound!: ElementRef<HTMLAudioElement>;
  onSpell(): void {
    const audio = this.spellSound.nativeElement;

    audio.currentTime = 0;
    audio.volume = 0.5;

    audio.play().catch(err => {
      console.warn('Audio bloqué par le navigateur', err);
    });
  }

  @ViewChild('houseSound')
  houseSound!: ElementRef<HTMLAudioElement>;
  onHouse(): void {
    const audio = this.houseSound.nativeElement;

    audio.currentTime = 0;
    audio.volume = 0.5;

    audio.play().catch(err => {
      console.warn('Audio bloqué par le navigateur', err);
    });
  }

  @ViewChild('staffSound')
  staffSound!: ElementRef<HTMLAudioElement>;
  onStaff(): void {
    const audio = this.staffSound.nativeElement;

    audio.currentTime = 0;
    audio.volume = 1.0;

    audio.play().catch(err => {
      console.warn('Audio bloqué par le navigateur', err);
    });
  }

  @ViewChild('charaSound')
  charaSound!: ElementRef<HTMLAudioElement>;
  onChara(): void {
    const audio = this.charaSound.nativeElement;

    audio.currentTime = 0;
    audio.volume = 1.0;

    audio.play().catch(err => {
      console.warn('Audio bloqué par le navigateur', err);
    });
  }
}
