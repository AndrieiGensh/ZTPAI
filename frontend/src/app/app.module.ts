import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
//import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";

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
import { DiaryTableComponent } from './components/diary-table/diary-table.component';
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { PostDialogBoxComponent } from './components/post-dialog-box/post-dialog-box.component';
import { HashtagComponent } from './components/hashtag/hashtag.component';
import { PasswordConfirmDialogBox } from './components/password-confirm-dialog-box/password-confirm-dialog-box.component';
import { ActionAcceptionDialogBox } from './components/action-acception-dialog-box/action-acception-dialog-box.component';

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
    ForumPostComponent,
    DiaryTableComponent,
    DialogBoxComponent,
    PostDialogBoxComponent,
    HashtagComponent,
    PasswordConfirmDialogBox,
    ActionAcceptionDialogBox
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxChartsModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    MatIconModule
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
