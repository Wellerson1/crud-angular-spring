import { Injectable } from '@angular/core';
import { Course } from './model/model';
import { HttpClient } from '@angular/common/http'
import { delay, first, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoServicesService {

  private readonly API = 'api/cursos'

  constructor(private httpCliente: HttpClient) { }

  list(): Observable<Course[]> {
    return this.httpCliente.get<Course[]>(this.API)
      .pipe(
        first(),
        tap(courses => { console.log(courses) })
      );
  }

  delete(id: any): Observable<any> {
    return this.httpCliente.delete(`${this.API}/${id}`);
  }
}
