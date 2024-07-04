import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ChildrenRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then((m) => m.RegisterComponent),
  },
  {
    path: 'logout',
    loadComponent: () =>
      import('./logout/logout.component').then(
        (c) => c.LogoutComponent
      ),
  },

];

@NgModule({
  imports: [RouterModule.forChild(ChildrenRoutes)],
  exports: [RouterModule],
})
export class ModRoutingModule {}
