import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-forms',
  templateUrl: './user-forms.component.html',
  styleUrls: ['./user-forms.component.scss'],
})
export class UserFormsComponent implements OnInit {
  subForms!: FormGroup;
  submit: boolean = false;
  submitMessage: boolean = false;
  hideForms: boolean = false;
  validationMessage: any;
  constructor(private fb: FormBuilder) {}

  // emailMessage!: string;
  // private FormsMessage = {
  //   required: 'Please enter your email address',
  //   email: 'Please enter a valid address',
  // };

  ngOnInit() {
    this.subForms = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      // email: ['', [Validators.required, Validators.email]],
      email: ['', [Validators.required, Validators.minLength(2)]],
    });
    // const emailControl = this.subForms.get('email');
    // emailControl?.valueChanges.subscribe( value => this.setMessage(emailControl));
  }

  // setMessage(c:AbstractControl):void{
  //   this.emailMessage ='';
  //   if((c.touched || c.dirty) && c.errors){
  //     this.emailMessage =Object.keys(c.errors).map(key=> this.validationMessage[key]).join('');
  //   };

  // }
  populateTestData(): void {
    this.subForms.patchValue({
      name: 'Jack',
      email: 'jack@torchwood.com',
    });
  }

 

  save() {
    // console.log(this.subForms, 'forms');
    this.submit = true;
    this.submitMessage = true;
    this.hideForms = true;
  }
}
