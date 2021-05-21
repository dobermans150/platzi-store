import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicFormComponent implements OnInit {
  nameField = new FormControl('');
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
}
