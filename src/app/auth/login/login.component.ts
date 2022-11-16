import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PangolinService } from 'src/app/pangolin/pangolin.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  constructor(
    private authService: AuthService,
    private pangolinService: PangolinService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  //   if (this.authService.getToken('Token')) {
  //     this.isLoggedIn = true;
  //   }
  this.form = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
        ]
      ]
    }
  );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmitLogin(): void {
    this.submitted = true;
    const { email, password } = this.form.value;

    this.authService.login(email, password).subscribe({
      next: data => {
        console.log(data);
        
        this.authService.setToken('Token', data.accessToken);
        this.isLoggedIn = true;
        this.isLoginFailed = false;
        this.pangolinService.getProfil().subscribe({
          next: data => {
            console.log(data);
            
            this.authService.setToken('ProfilId', data._id)
          },
          error: err => {
            console.log(err);
            
            this.errorMessage = err.error.error;
          }
        })
        this.router.navigateByUrl('/');
      },
      error: err => {
        this.errorMessage = err.error.error;
        this.isLoginFailed = true;
      }
    });
  }

  goRegister(): void {
    this.router.navigateByUrl('/register');
  }
}
