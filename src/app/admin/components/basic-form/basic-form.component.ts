import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl(''),
    phone: new FormControl(''),
    color: new FormControl('#00000'),
    date: new FormControl(''),
    number: new FormControl(''),
    category: new FormControl('categoy-1'),
    tag: new FormControl(''),
    agree: new FormControl(false),
    gender: new FormControl('male'),
    zone: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  getNameValue(): void {
    console.log(this.nameField.value);
  }

  save(event): void {
    console.log(this.form.value);
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
