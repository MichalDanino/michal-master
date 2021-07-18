import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticalComponent } from './components/artical/artical.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RegisterComponent } from './components/register/register.component';
import { ResulteComponent } from './components/resulte/resulte.component';
import { ScrapingComponent } from './components/scraping/scraping.component';
import { UserComponent } from './components/user/user.component';
import { WorkerComponent } from './components/worker/worker.component';


const routes: Routes = [
 
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoriesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path:'SingUpUser', component:UserComponent},
  {path:'artical', component:ArticalComponent},
  {path:'app-Scraping', component:ScrapingComponent},
  {path:'app-worker', component:WorkerComponent},
  {path:'app-Artical', component:ArticalComponent},
  {path:'result', component:ResulteComponent}
   //{ path: '**', component: PageNotFoundComponent }
  //,treatSens - add it to the path, to send also the sensitive
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
