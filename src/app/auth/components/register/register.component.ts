import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../../core/services/auth/auth.service';
import { MyValidators } from '../../../utils/validators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(): void {
    /* Formulario */
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            MyValidators.validPassword,
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        type: ['company', [Validators.required]],
        companyName: ['', [Validators.required]],
      },
      { validators: MyValidators.matchPassword }
    );

    this.typeField.valueChanges.subscribe((value) => {
      console.log(value);
      if (value === 'company') {
        this.companyNameField.setValidators([Validators.required]);
      } else {
        this.companyNameField.setValidators(null);
      }

      this.companyNameField.updateValueAndValidity();
    });
  }

  /* Functions */

  register(event): void {
    event.preventDefault();
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.authService.createUser(email, password).then(() => {
        this.router.navigate(['/auth/login']);
      });
    }
  }

  /* Getters */
  get typeField(): AbstractControl {
    return this.form.get('type');
  }

  get companyNameField(): AbstractControl {
    return this.form.get('companyName');
  }

  get emailField(): AbstractControl {
    return this.form.get('email');
  }

  get passwordField(): AbstractControl {
    return this.form.get('password');
  }

  get confirmPasswordField(): AbstractControl {
    return this.form.get('confirmPassword');
  }
}
