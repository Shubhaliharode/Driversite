import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
  {
path:'home',component:HomeComponent
},
 {
path:'about',component:AboutComponent
}, {
path:'signin',component:SigninComponent
}, {
path:'contact',component:ContactComponent
},
{
  path:'signup',component:UserComponent,
  children:[{path:'',component:SignUpComponent}]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
