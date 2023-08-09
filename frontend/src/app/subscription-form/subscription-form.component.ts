import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss'],
})
export class SubscriptionFormComponent implements OnInit {
  subscriptionForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.subscriptionForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  subscribe() {
    if (this.subscriptionForm.valid) {
      const formData = this.subscriptionForm.value;
      console.log(`Subscribed: Name - ${formData.name}, Email - ${formData.email}`);
      // Add your subscription logic here, e.g., sending the data to a server.
      alert(`Thank you for subscribing, ${formData.name}!`);
      this.subscriptionForm.reset();
    }
  }
}
