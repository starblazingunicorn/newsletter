import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
interface newsletterFormMessage {
  errorMessage: string;
  successMessage?: string;
}
interface FormErrorListItem {
  id: string;
  message: string;
}
@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss'],
})
export class SubscriptionFormComponent implements OnInit {
  newsletterForm: FormGroup = new FormGroup({});

  submittedData: any = null;

  formErrorList: FormErrorListItem[] = [];

  constructor(private formBuilder: FormBuilder) {}

  submitted = false;

  showThankYouMessage = false;

  formErrorMessage: Record<string, newsletterFormMessage> = {
    name: <newsletterFormMessage>{
      errorMessage: 'Name is required.',
      successMessage: 'Valid name',
    },

    email: <newsletterFormMessage>{
      errorMessage: 'email is required.',
      successMessage: 'Valid email!',
    },
  };

  ngOnInit() {
    this.newsletterForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]{2,}[.][A-Za-z]{2,}$'
        ),
      ]),
    });
    this.validateForm();
  }

  submitNewsletterForm() {

    this.submitted = true;
    // this.newsletterForm.reset();
    this.showThankYouMessage = true;
  
    setTimeout(() => {
      this.showThankYouMessage = false;
    }, 5000); 
    this.validateForm;
  }
   
  

  

  validateForm() {
    this.formErrorList = [];
  

    for (const [key] of Object.entries(this.newsletterForm.controls)) {
      if (this.newsletterForm.controls[key].invalid) {
        this.formErrorList.push({
          id: key,
          message: this.formErrorMessage[key].errorMessage,
        });
      }
    }
  }

  getValidation(controlName: string | number) {
    if (this.submitted) {
      return this.newsletterForm.controls[controlName].invalid
        ? 'error'
        : 'success';
    }
    return 'neutral';
  }


}
