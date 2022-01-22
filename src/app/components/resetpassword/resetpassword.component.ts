import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  resetPasswordForm!: FormGroup;
  submitted = true;


  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group({
      password: ['',[ Validators.required, Validators.minLength(6)]], 
      confirmPassword: ['', [Validators.required, Validators.requiredTrue]]
    });
    }
    resetpassword(){
      console.log(this.resetPasswordForm.value);
    }
}
