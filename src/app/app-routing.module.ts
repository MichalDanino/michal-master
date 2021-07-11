import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticalComponent } from './components/artical/artical.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CookbookComponent } from './components/cookbook/cookbook.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RegisterComponent } from './components/register/register.component';
import { ScrapingComponent } from './components/scraping/scraping.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
 
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoriesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cookbook', component: CookbookComponent },
  {path:'SingUpUser', component:UserComponent},
  {path:'artical', component:ArticalComponent},
  {path:'app-Scraping', component:ScrapingComponent}
   //{ path: '**', component: PageNotFoundComponent }
  //,treatSens - add it to the path, to send also the sensitive
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
