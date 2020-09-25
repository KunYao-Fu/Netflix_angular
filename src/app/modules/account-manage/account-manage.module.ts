import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountManageRoutingModule } from './account-manage-routing.module';
import { AccountManageComponent } from './pages/account-manage/account-manage.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { UserComponent } from './components/user/user.component';
import { CreateComponent } from './pages/create/create.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AccountManageComponent,
    UserManagementComponent,
    UserComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AccountManageRoutingModule
  ],
  exports: [
  ]
})
export class AccountManageModule { }
