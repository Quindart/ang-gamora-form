import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})

export class ContactFormComponent {
  contactForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group(
      {
        fullName: ["", [Validators.required, Validators.pattern(/[a-zA-Z\s]+/)]],
        companyName: ['AEGONA', [Validators.required, Validators.pattern(/[a-zA-Z\s]+/)]],
        businessPhone: ['', [Validators.required]],
        email: ['quangdev@gmail.com', [Validators.required, Validators.email]],
        message: ['', Validators.required],
      },
      {}
    );
  }
  get fullName() {
    return this.contactForm.get('fullName');
  }

  onSubmit() {
    if (this.contactForm.valid) {
      alert(JSON.stringify(this.contactForm.value));
    } else {
      alert('Form is invalid');
    }
  }
}
