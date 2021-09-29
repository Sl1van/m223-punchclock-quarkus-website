import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../AuthService";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }

  public constructor(
    @Inject(AppComponent) public parent: AppComponent,
    private authService: AuthService
  ) {
  }

  usernameControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('', [Validators.required]);

  hide = true;


  submit(): void {
    this.authService.login({username: this.usernameControl.value, password: this.passwordControl.value})
      //.subscribe(value => ;
      .subscribe(
        (response) => {
          console.log('success')
          console.log(JSON.parse(response))
          sessionStorage.setItem('JWT', response)
          window.location.href= 'http://' + window.location.origin
        }
      );
  }
}
