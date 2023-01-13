import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { MatchValidator } from 'src/app/services/match-password/match';
import { AuthService } from '../services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({
    companyName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  isSubmit = false;

  constructor(private formBuilder: FormBuilder, private _authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        companyName: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', [Validators.required, Validators.minLength(5)]],
        password: ['', ([Validators.required, Validators.minLength(8)])],
        // password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
        phone : ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}')]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        validators: [MatchValidator.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmit(): void {
    this.isSubmit = true;

    if (this.registerForm.invalid) {
      console.log('Register invalid')
      return;
    }
    else if(this.registerForm.valid) {
      let scopeThis = this;
      this._authService.register(this.registerForm.value).subscribe({
        next(data) {
          console.log('Register Successfull');
          scopeThis.router.navigate(['/login'])
        },
        error(err) {
          if (err.status === 400) {
            console.log(err.error.message);
          }
        }
      })
    }
    console.log(JSON.stringify(this.registerForm.value));
  }

  onReset(): void {
    this.isSubmit = false;
    this.registerForm.reset();
  }
}
