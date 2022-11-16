import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.component.html',
  styleUrls: ['./update-profil.component.scss']
})
export class UpdateProfilComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    role: new FormControl(''),
  });
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

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
        role: ['',[Validators.required,]],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    const { username, role } = this.form.value;

    this.authService.updateProfil(username, role).subscribe({
      next: data => {
        this.router.navigateByUrl('/profil');
      },
      error: err => {
        this.errorMessage = err.error.error;
      }
    });
  }

  goProfil(): void {
    this.router.navigateByUrl('/profil');
  }

}
