import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountManageComponent } from './pages/account-manage/account-manage.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { CreateComponent } from './pages/create/create.component';


const routes: Routes = [
  { path: '', component: AccountManageComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit', component: UserManagementComponent },
  // { path: 'edit/:currentUser', component: UserManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountManageRoutingModule { }
