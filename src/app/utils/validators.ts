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

  static matchPassword(control: AbstractControl): object {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
    if (password === confirmPassword) {
      return null;
    }

    return { match_password: true };
  }
}
function containNumber(Value: string): boolean {
  return Value.split('').find((v) => isNumber(v)) !== undefined;
}

function isNumber(value: string): number | boolean {
  return !isNaN(parseInt(value, 10));
}
