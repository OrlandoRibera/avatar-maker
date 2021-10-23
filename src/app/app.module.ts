import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarModule } from '../../projects/avatar/src/lib/avatar.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from './core/core.module';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AvatarMkrComponent } from './modules/avatar/avatar-mkr/avatar-mkr.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
@NgModule({
  declarations: [AppComponent, AvatarMkrComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AvatarModule,
    BrowserAnimationsModule,
    MatRadioModule,
    FormsModule,
    AppRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    ToastrModule.forRoot(),
  ],
  exports: [NavbarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
