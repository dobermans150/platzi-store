import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.buildFor();
  }

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  private buildFor(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', Validators.required],
      phone: [''],
      color: ['#00000'],
      date: [''],
      number: [''],
      category: ['categoy-1'],
      tag: ['categoy-1'],
      agree: [false],
      gender: ['male'],
      zone: [''],
    });
  }

  getNameValue(): void {
    console.log(this.nameField.value);
  }

  save(event): void {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  get isNameFieldValid(): Validators {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid(): Validators {
    return this.nameField.touched && this.nameField.invalid;
  }

  get nameField(): AbstractControl {
    return this.form.get('name');
  }

  get emailField(): AbstractControl {
    return this.form.get('email');
  }

  get phoneField(): AbstractControl {
    return this.form.get('phone');
  }

  get colorField(): AbstractControl {
    return this.form.get('color');
  }

  get dateField(): AbstractControl {
    return this.form.get('date');
  }

  get numberField(): AbstractControl {
    return this.form.get('number');
  }

  get categoryField(): AbstractControl {
    return this.form.get('category');
  }

  get tagField(): AbstractControl {
    return this.form.get('tag');
  }

  get agreeField(): AbstractControl {
    return this.form.get('agree');
  }

  get genderField(): AbstractControl {
    return this.form.get('gender');
  }

  get zoneField(): AbstractControl {
    return this.form.get('zone');
  }
}
