import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../services/auth-service.service';
import {FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor(private authServiceService: AuthServiceService, private formBuilder: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nik: ['', [Validators.required, Validators.min(10), Validators.max(120)]],
      password: ['', [Validators.required]]
    });

    
  }


  login() {
    console.log('clickk')
    console.log(this.loginForm.value)
    this.authServiceService.login(this.loginForm.value).subscribe((response:any) => {
      const token = response.data.token
      // this.authServiceService.setToken(token);
      console.log('Login successful, token stored.');
    }, error => {
      console.error('Login failed', error);
    });

}
}
