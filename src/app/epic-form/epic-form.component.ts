import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Address } from '../Multi';
@Component({
  selector: 'app-epic-form',
  templateUrl: './epic-form.component.html',
  styleUrls: ['./epic-form.component.css']
})
export class EpicFormComponent implements OnInit {
  
  public newAddress: Address[] = [];
  addressForm!: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }
  
  initializeForm(): void {
    this.addressForm = this.fb.group({
      name: '',
      phone: '',
      email: '',
      currAdd: '',
      defAdd: '',
      copyChk: false
    });
  }
  onSubmit(): void {

    console.log(this.addressForm.value);
    this.newAddress.push({
      name: this.addressForm.value.name,
      phone: this.addressForm.value.phone,
      email: this.addressForm.value.email,
      currAdd: this.addressForm.value.currAdd,
      defAdd: this.addressForm.value.defAdd
    })
  }

  copyAddress() {
    var x = <HTMLInputElement>document.querySelector('.form-check-input');
      if(x.checked) {
        this.addressForm.value.defAdd=this.addressForm.value.currAdd;
      (<HTMLInputElement>document.getElementById('defAddress')).value = this.addressForm.value.defAdd;
      } else {
        return;
      }     
  }

  editAddress(i: number) {
    this.addressForm.value.name = this.newAddress[i].name;
    this.addressForm.value.phone = this.newAddress[i].phone;
    this.addressForm.value.emamil = this.newAddress[i].email;
    this.addressForm.value.currAdd = this.newAddress[i].currAdd;
    this.addressForm.value.defAdd = this.newAddress[i].defAdd;
    (<HTMLInputElement>document.getElementById('Name1')).value = this.newAddress[i].name;
    (<HTMLInputElement>document.getElementById('Phone1')).value = this.newAddress[i].phone.toString();
    (<HTMLInputElement>document.getElementById('Email1')).value = this.newAddress[i].email;
    (<HTMLInputElement>document.getElementById('currAddress')).value =  this.newAddress[i].currAdd;
    (<HTMLInputElement>document.getElementById('defAddress')).value = this.newAddress[i].defAdd;

    this.newAddress.splice(i,1);
  }


}
