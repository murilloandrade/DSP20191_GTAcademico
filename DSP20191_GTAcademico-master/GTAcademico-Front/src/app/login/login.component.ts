import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenStorage } from '../services/token.storage';
import { NotifyService } from '../services/notify/notify.service';
import { WindowRef } from '../WindowRef';

interface token {
  accessToken: string,
  tokenType: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {

  labels: any;

  constructor(private router: Router, private authService: AuthService, private token: TokenStorage,
    private winRef: WindowRef, private notifyService: NotifyService) {
    if (token.getToken() != undefined) {
      router.navigate(["/diciplina"]);
    }
  }

  username: string;
  password: string;

  ngOnInit() {
  }

  checkFields() {
    if (this.username == (null || '' || undefined)) {
      this.notifyService.createNotify(this.labels.notifications.warning, this.labels.notifications.loginName, "orange");
      return false;
    }
    if (this.password == (null || '' || undefined)) {
      this.notifyService.createNotify(this.labels.notifications.warning, this.labels.notifications.loginPassword, "orange");
      return false;
    }
    if (this.password.length < 6) {
      this.notifyService.createNotify(this.labels.notifications.warning, this.labels.notifications.passLess, "orange");
      return false;
    }
    return true;
  }

  login(): void {
    if (!this.checkFields()) {
      return;
    }
    this.checkFields();
    this.authService.attemptAuth(this.username, this.password).toPromise().then(
      data => {
        this.token.saveToken((data as token).accessToken);
        this.router.navigate(['diciplina']);
        this.notifyService.createNotify(this.labels.notifications.success, this.labels.notifications.loginSucess, "green");
      }
    ).catch(err => {
      this.loginErrors(err);
    });
  }

  loginErrors(err) {
    console.log(err);
    switch (err.status) {
      case 401:
        this.notifyService.createNotify(this.labels.notifications.warning, this.labels.notifications.userOrPass, 'orange');
        break;

      default:
        this.notifyService.createNotify(this.labels.notifications.warning, this.labels.notifications.defaultLoginError, 'orange');
        break;
    }
  }

}