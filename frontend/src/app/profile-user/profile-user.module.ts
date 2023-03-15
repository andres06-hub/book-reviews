import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileUserRoutingModule } from './profile-user-routing.module';
import { ProfileUserComponent } from './profile-user.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProfileUserComponent],
  imports: [CommonModule, ProfileUserRoutingModule, SharedModule],
})
export class ProfileUserModule {}
