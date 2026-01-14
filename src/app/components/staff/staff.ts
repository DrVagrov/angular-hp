import {Component, computed, inject} from '@angular/core';
import {StaffList} from './components/staff-list/staff-list';
import {toSignal} from '@angular/core/rxjs-interop';
import {StaffService} from '../../shared/services/staff/staffs.service';
import {httpResource} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { CharactersList } from '../characters/components/characters-list/characters-list';

@Component({
  selector: 'app-staff',
  imports: [
    CharactersList
  ],
  templateUrl: './staff.html',
  styleUrl: './staff.scss',
})


export class Staff {

    private activatedRoute = inject(ActivatedRoute);
    private routeData = toSignal(this.activatedRoute.data, {
    initialValue: this.activatedRoute.snapshot.data
  });
  private staffService = inject(StaffService);
  protected staff = computed(()=>this.routeData()['staffs'])

  // httpResource.
  protected staffResource = httpResource(() => environment.baseUrl + '/characters/staff');
}
