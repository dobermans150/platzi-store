import { AbstractControl } from '@angular/forms';

export class MyValidators {
  static isPriceValid(control: AbstractControl): object {
    const value = control.value;

    if (value > 10000) {
      return { price_invalid: true };
    }
    return null;
  }

  static validPassword(control: AbstractControl): object {
    const value = control.value;

    if (!containNumber(value)) {
      return { invalid_password: true };
    }

    return null;
  }
}
function containNumber(Value: string): boolean {
  return Value.split('').find((v) => isNumber(v)) !== undefined;
}

function isNumber(value: string): number | boolean {
  return !isNaN(parseInt(value, 10));
}
