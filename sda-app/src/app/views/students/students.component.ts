import { Component, OnInit } from '@angular/core';

import { Student } from './model/student';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  studentsList: Student[] = [];

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.getStudentsList();
  }

  private getStudentsList(): void {
    this.studentsService.getStudents().subscribe(studentsListAPI => this.studentsList = studentsListAPI);
  }

}
