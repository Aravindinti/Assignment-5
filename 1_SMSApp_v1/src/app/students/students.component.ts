import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';
import { StudentService } from '../service/student.service';
import { StudentUpdateComponent } from '../student-update/student-update.component';
import { SortComponent } from '../sort/sort.component';
import { StudentRestService } from '../service/student-rest.service';
import { response } from 'express';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule,StudentUpdateComponent,SortComponent],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  students:Student[]=[]
  message:string=''
  colorClass:string=''
  upstudent:Student[]=[]
  selectedStudent!: Student
  updateclicked:boolean=false
  constructor(private service:StudentRestService)
  {
  
this.showStudents();
  }
  showStudents(){
   
  
  this.service.findAllStudents().subscribe(
    response=>this.students=response
  );
  
  }
  deleteStudent(rollno:number){
    const res=confirm("Do u Really Wanna Delete");
    if(res)
      { 
       this.service.deleteByRollNo(rollno).subscribe(
        success=>{
          this.students=this.students.filter(s=>s.rollno!=rollno);
          this.message='Record Delete';
          this.colorClass='success';
        }
       )

       
      }
      else{
        this.colorClass='error'
        this.message='Record Delete cancelled';

      }
  }
  updateStudent(s:Student){
   /* let ss=new Student(s.rollno,s.name,s.numberOfAttempts,s.percentage,s.subjectLearning);
  this.upstudent.push(ss)  
  */
 //this.dialog.open(StudentUpdateComponent,{data:s})
 this.updateclicked=true
  this.selectedStudent=s;
  }

doUpdate(updatedStudent:Student)
{
  //map is a buildin function of javaScript that transforms every element of the array
//which is exactly similar to lambda functions and return new array.
   let modifiedstudent=this.students.map(s=>{
 if(s.rollno==updatedStudent.rollno)
 {
  //following line make use of spread operator 
  //spread operator is added in ES6
//using following line we are changing the value of numberOfAtempts field.
  return{...s,numberOfAttempts:updatedStudent.numberofAttempts}
 }
 else{
  return s;
 }
  })
  this.students=modifiedstudent
  this.updateclicked=false
}
}
