import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoursersRoutingModule } from './coursers-routing.module';
import { CoursersComponent } from './coursers/coursers.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CoursersComponent
  ],
  imports: [
    CommonModule,
    CoursersRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class CoursersModule { }
