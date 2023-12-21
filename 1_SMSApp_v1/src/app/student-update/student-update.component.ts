import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';
import { FormsModule } from '@angular/forms';

//import {MAT_DIALOG_DATA,}

@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css'
})
export class StudentUpdateComponent {
  /*
constructor(@Inject(MAT_DIALOG_DATA) public data:Student){

}
*/
  @Input()
  updatedStudent=new Student(0,'0',0,0,[]);


  //to ssend data from chlid to parent we use @outputDecorator
  @Output()
  studentEmitter=new EventEmitter<Student>()
  perform_update()
  {
 this.studentEmitter.emit(this.updatedStudent)

  }
}
