import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth-guard.service';
import { TokenStorage } from './services/token.storage';
import { WindowRef } from './WindowRef';
import { NotifyService } from './services/notify/notify.service';
import { DiciplinaService } from './services/diciplina/dicplina.service';
import { DiciplinaComponent } from './funcionalidades/crud/diciplina/diciplina.component';
import { EventoComponent } from './funcionalidades/crud/evento/evento.component';
import { DiciplinaStorage } from './services/diciplina.storage';
import { EventosService } from './services/eventos/evento.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'diciplina',
    component: DiciplinaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'diciplina/eventos',
    component: EventoComponent,
    canActivate: [AuthGuardService]
  },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DiciplinaComponent,
    EventoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuardService, TokenStorage, EventosService,
     DiciplinaService, WindowRef, NotifyService, DiciplinaStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
