import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-forgotemail',
  templateUrl: './forgotemail.component.html',
  styleUrls: ['./forgotemail.component.scss']
})
export class ForgotemailComponent implements OnInit {

 
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
  forgotPasswordForm!: FormGroup;
  submitted = true;

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      forgotEmail: ['', Validators.required],
      
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.forgotPasswordForm.valid) {
      console.log(this.forgotPasswordForm.value);
      let forgotPassword = {
        email: this.forgotPasswordForm.value.forgotEmail,
      

      }
      this.userService.userForgotPassword(forgotPassword).subscribe((response: any) => {
        console.log(response)
      })
    }
    else {
      console.log("invalid");
    }
  }

}
