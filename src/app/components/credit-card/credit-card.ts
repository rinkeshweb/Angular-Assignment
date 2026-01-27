import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-credit-card',
  imports: [ReactiveFormsModule, PasswordModule, ButtonModule, InputMaskModule],
  templateUrl: './credit-card.html',
  styleUrl: './credit-card.css',
})
export class CreditCard {

  // 2) Implement a solution in Angular that tokenizes credit card data, also implements credit card number validation?


  submitting = signal<boolean>(false);
  private readonly fb = inject(FormBuilder)

  creditForm = this.fb.nonNullable.group({
    cardNumber: ['', [Validators.required, this.validcardNumber]],
    expiry: ['', [Validators.required, this.validExpiry]],
    cvv: ['', [Validators.required, this.validCVV]],
  })

  // Valid Card
  validcardNumber(control: any) {
    const value = control.value?.replace(/\s/g, '');
    let sum = 0;
    let alterNum = false;

    for (let i = value.length - 1; i >= 0; i--) {
      let n = +value[i];
      if (alterNum) {
        n *= 2;
        if (n > 9) n -= 9;
      }
      sum += n;
      alterNum = !alterNum;
    }

    return sum % 10 === 0 ? null : { invalidCard: true }
  }


  // Expiry Validation MM/YY
  validExpiry(control: any) {
    const value = control.value;
    if (!value) return null;

    const [month, year] = value.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);

    if (monthNum < 1 || monthNum > 12) return { invalidExpiry: true };
    if (yearNum < currentYear || (yearNum === currentYear && monthNum < currentMonth)) {
      return { expiredCard: true };
    }

    return null;
  }

  // CVV Valid
  validCVV(control: any) {
    const value = control.value;
    if (!value) return { invalidCVV: true }
    if (value.length < 3 || value.length > 4) {
      return { invalidCVV: true }
    }
    for (let char of value) {
      if (char < 0 || char > 9) {
        return { invalidCVV: true }
      }
    }
    return null
  }

  // Submit
  submitData() {
    if (this.creditForm.invalid) return;
    this.submitting.set(true);

    console.log('Validation true');
    console.log('CreditCard Form value => ', this.creditForm.value);

    this.creditForm.reset();
    this.submitting.set(false);


  }

}
