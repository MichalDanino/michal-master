import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MaterialService } from 'src/app/shared/services/material.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})


export class CategoriesComponent implements OnInit {
  
  
  form: FormGroup
  selected: string;
  checked: boolean = false;
  
  selectedAllergies: number[] = []
  searchText: string;
  Pup:boolean =false;
  SearchForm: any;
  color: any;
  listOfNemesRenoSelected:string;
  listOfCategory:string[]=[]

  constructor(private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router,private materialService:MaterialService
  ) { 
    this.GetAllCategory();
  }


  

  ngOnInit(): void {
    }
    pupTrue(){
      this.Pup=true;
    }
    GetAllCategory(){
      this.materialService.GetNameCategory().subscribe(a=> 
        {
         (this.listOfCategory)=a;
      }
    )
  }
  toppings: FormGroup;
  fff:boolean
  categories:string=''
  checked1(event:any,r)
  {
    
    this.selected = event.target.id;
   this.listOfNemesRenoSelected =this.listOfNemesRenoSelected+','+this.selected;
  }
  ddd()
  {console.log(this.listOfNemesRenoSelected);
    
  
    }
    Continue(){
      debugger
      sessionStorage.setItem('CategorySelected',this.listOfNemesRenoSelected);
      this.router.navigate(['/app-Scraping']);
  
    }
  
}




