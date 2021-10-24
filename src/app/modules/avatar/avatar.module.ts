import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarMkrComponent } from './components/avatar-mkr/avatar-mkr.component';
import { AppModule } from '../../app.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [CommonModule, AppModule],
  exports: [AvatarMkrComponent, HomeComponent],
  declarations: [AvatarMkrComponent, HomeComponent],
})
export class AvatarModule {}
