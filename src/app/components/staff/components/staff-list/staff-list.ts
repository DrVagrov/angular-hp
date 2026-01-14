import {Component, inject, input} from '@angular/core';
import {StaffModel} from '../../../../shared/models/staff';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-list',
  imports: [],
  templateUrl: './staff-list.html',
  styleUrl: './staff-list.scss',
})
export class StaffList {
  imge = 'assets/images/Command_Crab.jpg';
  staff = input.required<StaffModel[]>();
  private router = inject(Router);

  protected goToCharacterDetail(id: string) {
    this.router.navigate(['/characters', id]);
  }
}
