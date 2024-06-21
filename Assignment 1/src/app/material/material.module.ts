import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

const MaterialComponent = [
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
];
@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MaterialComponent],
})
export class MaterialModule {}
