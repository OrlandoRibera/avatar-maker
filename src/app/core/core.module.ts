import { NgModule } from '@angular/core';
import { LoginComponent } from './auth/components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppModule,
    RouterModule,
  ],
  exports: [LoginComponent, SignUpComponent],
  declarations: [LoginComponent, SignUpComponent],
})
export class CoreModule {}
