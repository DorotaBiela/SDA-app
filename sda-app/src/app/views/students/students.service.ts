import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private dbUrl: string = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.dbUrl);
  }

  getStudent(id: string): Observable<Student> {
    return this.http.get<Student>(`${this.dbUrl}/${id}`);
  }

  postStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.dbUrl, student);
  }

  putStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.dbUrl}/${student.id}`, student);
  }

  patchStudent(student: Partial<Student>): Observable<Student> {
    return this.http.patch<Student>(`${this.dbUrl}/${student.id}`, student);
  }

  deleteStudent(id: number): Observable<{}> {
    return this.http.delete<{}>(`${this.dbUrl}/${id}`);
  }
}
