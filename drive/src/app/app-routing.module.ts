import { UserProfileComponent } from "./user-profile/user-profile.component";

import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { UserComponent } from "./user/user.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "./user/sign-in/sign-in.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "login",
    component: UserComponent,
    children: [{ path: "", component: SignInComponent }]
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "signup",
    component: UserComponent,
    children: [{ path: "", component: SignUpComponent }]
  },
  {
    path: "userprofile",
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  { path: "", redirectTo: "/signup", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
