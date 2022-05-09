import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { Course } from '../model/model';
import { CursoServicesService } from '../services.service';

@Component({
  selector: 'app-coursers',
  templateUrl: './coursers.component.html',
  styleUrls: ['./coursers.component.scss']
})
export class CoursersComponent implements OnInit {

  courses$: Observable<Course[]>;
  displayedColumns= ['_id','name', 'category', 'action'];

  constructor(private cursoService: CursoServicesService,
              private dialog: MatDialog) {
                this.courses$ = this.cursoService.list()
                .pipe(
                  catchError(err => {
                    this.onError('Error ao carregar cursos')
                    return of([])
                  })
                )
  }

  ngOnInit(): void {
  }

  listar() {
    this.courses$ = this.cursoService.list()
    .pipe(
      catchError(err => {
        this.onError('Error ao carregar cursos')
        return of([])
      })
    )
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  onConfirm(id: string) {
   const dialogRef =  this.dialog.open(ConfirmDialogComponent, {
      data: 'Deseja excluir o curso?',
    });

    dialogRef.afterClosed()
    .subscribe((res) =>
    res ? this.deletar(id) : '')
  }

  deletar(id: any) {
    this.cursoService.delete(id)
    .subscribe(() => {
      this.listar();
    });
  }

}
