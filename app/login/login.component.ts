import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service/auth.service'
import { Router } from '@angular/router';
import { fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  localForm:any;
  isSubmit = false;
  
  form : FormGroup = new FormGroup({
    username: new FormControl(''),
    password : new FormControl('')
  });

  showError: boolean = false;
  private unsubscriber: Subject<void> = new Subject<void>();

  constructor(private fb:FormBuilder, private auth : AuthService, private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required],
    })

    history.pushState(null, '');

    fromEvent(window, 'popstate')
      .pipe(takeUntil(this.unsubscriber))
      .subscribe((_) => {
        history.pushState(null, '');
        this.showError = true;
      });
    
  }

  // scopeThis.router.navigate(['/login']);
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    debugger;
    this.isSubmit = true;
    if (this.form.invalid) {
      return
    } else {
      let scopeThis = this;
      this.auth.login(this.form.value).subscribe(data=> {
        if (data) {
          let val = data;
          console.log(val.token);
          localStorage.setItem('currentUser', JSON.stringify(val));
          console.log('Login Successfully');
          scopeThis.router.navigate(['/barchart'])
        }
      })
    }

    
  }

  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }
}
