import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/authentication/auth-guard.service';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [

    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [PreloadAllModules],
})
export class AppRoutingModule {}
