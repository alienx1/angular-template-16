import { CommonModule } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './authentication/auth.service';
import { ApiPrefixInterceptor } from './http/api-prefix.interceptor.service';
import { TimeoutInterceptor } from './http/timeout.interceptor.service';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, HttpClientModule, SharedModule],
  providers: [
    AuthService,
    ApiPrefixInterceptor,
    TimeoutInterceptor,
    { provide: HTTP_INTERCEPTORS, useClass: TimeoutInterceptor, multi: true },
  ],
})
export class CoreModule {}
