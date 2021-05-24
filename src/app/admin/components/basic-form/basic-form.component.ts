import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  nameField = new FormControl('', [Validators.required, Validators.maxLength(10)]);
  emailField = new FormControl('');
  phoneField = new FormControl('');
  colorField = new FormControl('#00000');
  dateField = new FormControl('');
  numberField = new FormControl('');

  categoryField = new FormControl('categoy-1');
  tagField = new FormControl('');

  agreeField = new FormControl(false);
  genderField = new FormControl('male');
  zoneField = new FormControl('');


  constructor() {}

  ngOnInit(): void {
    this.nameField.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  getNameValue(): void {
    console.log(this.nameField.value);
  }

  get isNameFieldValid(): Validators {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid(): Validators {
    return this.nameField.touched && this.nameField.invalid;

  }
}
