import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarMkrComponent } from './avatar-mkr/avatar-mkr.component';
import { AppModule } from '../../app.module';

@NgModule({
  imports: [CommonModule, AppModule],
  exports: [AvatarMkrComponent],
  declarations: [AvatarMkrComponent],
})
export class AvatarModule {}
