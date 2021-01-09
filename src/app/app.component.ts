import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'registry';
  email = new FormControl('', [Validators.required, Validators.email],);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  passFormControl = new FormControl('', [Validators.required, Validators.minLength(8),Validators.nullValidator] );
  confirmFormControl = new FormControl('', [Validators.required, Validators.minLength(8),Validators.nullValidator]);

  checkPasswordControls() {
    if (this.passFormControl.value !== this.confirmFormControl.value) {
      this.passFormControl.setErrors({ notEqual: true });
      this.confirmFormControl.setErrors({ notEqual: true });  
    } 

    else {
      this.passFormControl.setErrors(this.passFormControl.errors ? { ...this.passFormControl.errors } : null);
      this.confirmFormControl.setErrors(this.confirmFormControl.errors ? { ...this.confirmFormControl.errors } : null);
      
      
    }
  }
  }
