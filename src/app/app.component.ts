import { Component } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'registry';
  

  //Email validation
  email = new FormControl('', [Validators.required, Validators.email],);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a valid email';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  //Password confirm and password validation
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

  
  clickButton= '';
  submitButton(){
    if (this.email.hasError('required'), this.passFormControl.value == this.confirmFormControl.value){

console.log('ok');
    }
  }






  }
