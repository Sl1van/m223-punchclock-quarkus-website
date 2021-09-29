import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../AuthService";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
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
    this.authService.register({username: this.usernameControl.value, password: this.passwordControl.value})
      //.subscribe(value => ;
      .subscribe(
        (response) => {
          window.location.href= 'http://' + window.location.origin+'/login'
        }
      );
  }
}
