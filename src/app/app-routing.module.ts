import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';   
import { MoreComponent } from './more/more.component';   

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "more",
    component: MoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
