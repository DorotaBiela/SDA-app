import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Student } from './model/student';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  studentsList: Student[] = [];
  studentForm: FormGroup = new FormGroup({});

  constructor(private studentsService: StudentsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getStudentsList();
    this.createStudentForm();
  }

  private getStudentsList(): void {
    this.studentsService.getStudents().subscribe(studentsListAPI => this.studentsList = studentsListAPI);
  }

  createStudentForm(): void {
    this.studentForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['1990-01-01', Validators.required],
      fieldOfStudy: ['', Validators.required],
      average: ['', Validators.required],
    });
  }

  addStudent(): void {
    this.studentsService.postStudent(this.studentForm.value).subscribe(() => {
      this.getStudentsList();
      this.createStudentForm();
    });
  }

  removeStudent(id: number, ev: Event): void {
    ev.stopPropagation();
    this.studentsService.deleteStudent(id).subscribe(() => this.getStudentsList());
  }

}
