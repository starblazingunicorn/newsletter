import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
interface newsletterFormMessage {
  errorMessage: string;
  successMessage: string;
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

  constructor(private formBuilder: FormBuilder) {}

  submitted = false;

  showThankYouMessage = false;

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
  }

  submitNewsletterForm() {
    this.submitted = true;
    this.showThankYouMessage = true;
  }

  getValidation(controlName: string | number) {
    const control = this.newsletterForm.get(controlName.toString());
    if (control && control.touched) {
      return control.invalid ? 'error' : 'success';
    }
    return 'neutral';
  }
}
