import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';
import { Cons } from 'rxjs';
import { StudentService } from '../service/student.service';
import {MatRadioModule} from "@angular/material/radio"
import { StudentRestService } from '../service/student-rest.service';

@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule,MatRadioModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  students:Student[]=[]
   percentages:Student[]=[];
   
   constructor(private service:StudentRestService)
  {
  
this.showStudents();
  }
  showStudents(){
   
  
  this.service.findAllStudents().subscribe(
    response=>this.students=response
  );
  }
  sortByPercentage()
  {
    this.percentages=this.students.sort((a, b) => a.percentage.toString().localeCompare(b.percentage.toString()));
  }
  sortByAttempts()
  {
    this.percentages=this.students.sort((a, b) => a.numberofAttempts.toString().localeCompare(b.numberofAttempts.toString()));
  }
  sortByNoOfsubLearning()
  {
    this.percentages=this.students.sort((a, b) => a.subjectsLearning.length.toString().localeCompare(b.subjectsLearning.length.toString()));
 
  }
}
