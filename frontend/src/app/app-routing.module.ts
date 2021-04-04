import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DiaryComponent} from './components/diary/diary.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {SettingsComponent} from './components/settings/settings.component';
import {ForumComponent} from './components/forum/forum.component';
import {DishInfoComponent} from './components/dish-info/dish-info.component';
import {UserComponent} from './components/user/user.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', children:
    [ 
      {path: '', pathMatch: 'full', redirectTo: 'diary'},
      {path: 'forum', component: ForumComponent},
      {path: 'dish-info', component: DishInfoComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'diary', component: DiaryComponent}
    ],
    component: UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
