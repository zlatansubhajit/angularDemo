import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-functional-loc',
  templateUrl: './functional-loc.component.html',
  styleUrls: ['./functional-loc.component.css']
})
export class FunctionalLocComponent implements OnInit {

  form1!: FormGroup;
  form2!: FormGroup;
  options1: string[] = ['One','Two','Three'];
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form1 = this.fb.group({
      initiator : ['', Validators.required],
      refNo : ['', Validators.required],
      plant: [''],
      costCentre: [''],
      workArea: [''],
      date: [''],
      telNo: ['',[Validators.required, Validators.minLength(4)]],
      mgmtChange: [''],
      legisl: ['']
      
    });

    this.form2 = this.fb.group({
      attachments: [''],
      fnP2: [''],
      fnLocP2: [''],
      descriptionP2: [''],
      mgmtChangeNoP2: [''],
      reasonForChangeP2: [''],
      manufacturerP2: [''],
      modelP2: [''],
      classP2: [''],
      damageP2: [''],
  
    });
  }

  
  get initiator() {
    return this.form1.get('initiator');
  }
  

  showAttach(e: string) {
    if(e == 'Y') {
      document.querySelector("#fileSelector1")?.classList.toggle("collapse");
    } else {
      document.querySelector("#fileSelector1")?.classList.add("collapse");
    }
  }

 /*  get attachments(): FormArray {
    return this.form2.get('attachments') as FormArray;
  }

  AttachMore() {
    this.attachments.push(this.fb.control(''));
  } */

  onSubmit(e: string) {
    if(e == 'form1') {
      console.log(this.form1);
    } else if(e == 'form2') {
      console.log(this.form2);
    }
    
  }

}
