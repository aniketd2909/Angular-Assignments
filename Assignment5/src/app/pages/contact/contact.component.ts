import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { min } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  submitFlag: boolean = false;
  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }
  onSubmit() {
    this.submitFlag = true;
  }
}
