import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public.routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent , RegisterComponent],
  imports: [PublicRoutingModule, CommonModule, SharedModule],
})
export class PublicModule {}
