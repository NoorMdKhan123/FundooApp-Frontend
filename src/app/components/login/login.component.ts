import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private route : ActivatedRoute, private userService: UserService) { }
  loginForm!: FormGroup;
  submitted = true;
  token:any;


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.token=this.route.snapshot.paramMap.get('token');
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value, this.token);
      let login = {
        emailId: this.loginForm.value.email,
        password: this.loginForm.value.password,

      }
      this.userService.userLogin(login, this.token).subscribe((response: any) => {
        console.log(response)
        localStorage.setItem('token',response.result.token) 
      })
    }
    else {
      console.log("invalid");
    }
  }

}
