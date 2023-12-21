import { Injectable } from '@angular/core';
import { Student } from '../../model/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students:Student[]=[]
 
  constructor() { 

    let s1=new Student(1,"Aravind",1,80,["java","python"]);
    let s2=new Student(2,"Rahul",5,70,["AWS","AIML"]);
    let s3=new Student(3,"kaaa",3,90,["AIML"],);
    let s4=new Student(4,"saa",2,50,["AWS","AIML"]);
    let s5=new Student(5,"jjaa",1,55,["AWS"])
 this.students.push(s1);
 this.students.push(s2);
 this.students.push(s3);
 this.students.push(s4);
 this.students.push(s5);
  }
  findAllStudent()
  {
    return this.students;
  }
}
