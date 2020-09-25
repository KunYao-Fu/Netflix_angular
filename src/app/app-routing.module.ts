import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { MainComponent } from './pages/main/main.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'guest', loadChildren: () => import('./modules/guest/guest.module').then(m => m.GuestModule) },
      { path: 'account-manage', loadChildren: () => import('./modules/account-manage/account-manage.module').then(m => m.AccountManageModule) },
      { path: 'main', component: MainComponent },
    ],
  },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
