import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 

  constructor(private formBuilder: FormBuilder, private route:Router, private userService:UserService) { }
  loginForm!: FormGroup;
  submitted = true;


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',[ Validators.required, Validators.email]], 
      passowrd: ['', [Validators.required, Validators.minLength(6)]]
    });
    }

    login(){
      if(this.loginForm.valid){
      console.log(this.loginForm.value);

      let reqData = {
        email : this.loginForm.value.email,
        password:this.loginForm.value.passowrd

      }
      this.userService.userLogin(reqData)
      }
      else{
        console.log("form is invalid");
        return;
      }
    }

}
