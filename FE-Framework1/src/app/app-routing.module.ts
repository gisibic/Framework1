import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { AdminLayoutComponent } from './Layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './Pages/Admin/dashboard/dashboard.component';
import { CourseComponent } from './Pages/Admin/Course/course/course.component';
import { AdminCategoryComponent } from './Pages/Admin/Category/admin-category/admin-category.component';
import { AddCategoryComponent } from "./Pages/Admin/Category/Add-category/add-category/add-category.component";
import { AddCourseComponent } from './Pages/Admin/Course/add-course/add-course.component';
import { UpdateCourseComponent } from './Pages/Admin/Course/update-course/update-course.component';
import { EditCategoryComponent } from "./Pages/Admin/Category/edit-category/edit-category.component";
import { SignupComponent } from "./Pages/User/Signup/signup/signup.component";
import { SigninComponent } from "./Pages/User/Signin/signin/signin.component";
import { HomePageComponent } from "./Client/home-page/home-page.component";
import { CourseDetailComponent } from "./Client/course-detail/course-detail.component";


const routes: Routes = [
  {
    path:'', component:HomePageComponent, children:[
     {path: "course/:id", component: CourseDetailComponent}
      
    ]
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "signin", component: SigninComponent
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "dashboard", component: DashboardComponent },
      //       === Course ===
      { path: "course", component: CourseComponent },
      { path: "course/add", component: AddCourseComponent },
      { path: "course/:id/edit", component: UpdateCourseComponent },

      //      === Category ===
      { path: "category", component: AdminCategoryComponent },
      { path: "category/add", component: AddCategoryComponent },
      { path: "category/edit/:id", component: EditCategoryComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
