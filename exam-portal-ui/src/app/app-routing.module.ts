import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ViewCategoryComponent } from './pages/admin/view-category/view-category.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'signup',component:SignUpComponent},
  {path:'login',component: LoginComponent},
  {path:'admin',component: DashboardComponent
  ,children:[
    {path:'',component: WelcomeComponent},
    {path:'profile',component: ProfileComponent},
    {path:'add-category',component: AddCategoryComponent},
    {path:'view-category',component: ViewCategoryComponent},
    {path:'add-quiz',component: AddQuizComponent},
    {path:'view-quiz',component: ViewQuizComponent}

    ]},
  {path:'user-dashboard',component: UserDashboardComponent,pathMatch:'full'},
  
  {path: '**', redirectTo :'/home', pathMatch:'full'}   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
