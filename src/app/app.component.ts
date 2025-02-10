import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactForm } from './contact-form/contact-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ang-gamora-form';
  contactInput: ContactForm = {
    fullName: 'Quang dev',
    businessPhone: '0364283391',
    companyName: 'aegona',
    email: 'quangdev@gmail.com',
    message: 'hello world',
  };
}
