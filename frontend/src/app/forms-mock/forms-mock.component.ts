import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,

  FormGroup,
  Validators,
} from '@angular/forms';

interface FormData {
  name: string;
}

@Component({
  selector: 'app-forms-mock',
  templateUrl: './forms-mock.component.html',
  styleUrls: ['./forms-mock.component.scss'],
})
export class FormsMockComponent implements OnInit {
  myForms!: FormGroup;
  formData: FormData = {
    name: '',
  };
  showSuccessMessage: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForms = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
    });
  }
  validationMessages: { [key: string]: string } = {
    name: 'Username is required.',
   
  };
  save() {
    if (this.myForms.valid) {
      
      this.showSuccessMessage = true;
    }
  }
}
