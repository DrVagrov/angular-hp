import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import { StaffService } from "../services/staff/staffs.service";
import { StaffModel } from "../models/staff";

export const staffResolver : ResolveFn<StaffModel[]> = 
()=> inject(StaffService).getAllStaff();