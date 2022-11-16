import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Validation from '../utils/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
            Validators.pattern("[A-Za-z0-9]{3,}")
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        role: ['',[Validators.required,]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
          ]
        ],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }
  
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    const { username, email, password, role } = this.form.value;

    this.authService.register(username, email, password, role).subscribe({
      next: data => {
        console.log('================DATA====================');
        console.log(data);
        console.log('====================================');
        this.authService.setToken('Token', data.accessToken);
        this.authService.getProfil().subscribe({
          next: data => {
            this.authService.setToken('ProfilId', data._id)
          },
          error: err => {
            this.errorMessage = err.error.error;
          }
        })
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('/');
      },
      error: err => {
        this.errorMessage = err.error.error;
        this.isSignUpFailed = true;
      }
    });
  }

  goLogin(): void {
    this.router.navigateByUrl('/login');
  }

  // Si intégration button reset
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
