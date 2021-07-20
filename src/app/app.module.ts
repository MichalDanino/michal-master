import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryService } from './shared/services/category.service';
import { UserService } from './shared/services/user.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { Ng2CustomCarouselModule } from 'ng2-custom-carousel';

import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import {InputTextModule} from 'primeng/inputtext';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService } from 'primeng/api';
import { HighlightDirective } from './highlight.directive'; // ->  imported directive
import {FilterPipe} from './filter.pipe';
import { UserComponent } from './components/user/user.component';
import { ArticalComponent } from './components/artical/artical.component';
import { WorkerComponent } from './components/worker/worker.component';
import { ScrapingComponent } from './components/scraping/scraping.component';
import { ResulteComponent } from './components/resulte/resulte.component';
import { PreviousChoicesComponent } from './components/previous-choices/previous-choices.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';
import { FeedBakeComponent } from './components/feed-bake/feed-bake.component';

//import {DataViewModule} from 'primeng/dataview';


//import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
//import {MenuItem} from 'primeng/api';                  //api

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HighlightDirective,
    FilterPipe,
    UserComponent,
    ArticalComponent,
    WorkerComponent,
    ScrapingComponent,
    ResulteComponent,
    PreviousChoicesComponent,
    ConclusionComponent,
    FeedBakeComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    DynamicDialogModule,
    ToastModule,
    TableModule,
    ButtonModule,
    BrowserAnimationsModule,
    DataViewModule,
    InputTextModule,
    NgbModule,
    Ng2CustomCarouselModule
  ],
  
  providers: [ CategoryService, UserService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
