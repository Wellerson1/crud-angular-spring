import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { CategoriasPipe } from './pipes/categorias.pipe';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    ConfirmDialogComponent,
    CategoriasPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    ErrorDialogComponent,
    ConfirmDialogComponent,
    CategoriasPipe
  ]
})
export class SharedModule { }
