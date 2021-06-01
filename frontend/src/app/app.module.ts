import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForumComponent } from './components/forum/forum.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DiaryComponent } from './components/diary/diary.component';
import { DishInfoComponent } from './components/dish-info/dish-info.component';
import { UserComponent } from './components/user/user.component';
import { ForumPostComponent } from './components/forum-post/forum-post.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JWTInterceptor } from './helpers/interceptors/JWTInterceptor.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForumComponent,
    SettingsComponent,
    DiaryComponent,
    DishInfoComponent,
    UserComponent,
    ForumPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
