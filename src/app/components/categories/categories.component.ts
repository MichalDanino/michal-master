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
  ListImag:string[]
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
    this.Pup=false;
    this.ListImag=[
      "../../../assets/Category/room.jpg",
      "../../../assets/Category/ToiletAndBath.jpg",
      "../../../assets/Category/Bathroom.jpg",
      "../../../assets/Category/toilet.jpg",
      "../../../assets/Category/Flooring.jpg",
      "../../../assets/Category/Color.jpg",
      "../../../assets/Category/Category/window.jpg",
      "../../../assets/Category/Tileswall.jpg"
    ]
    
    }
 
    GetAllCategory(){
      this.materialService.GetNameCategory().subscribe(a=> 
        {
         (this.listOfCategory)=a;
      }
    )
  }
  
  
  checkedCategory(event:any,r)
  {
    
    this.selected = event.target.id;
   this.listOfNemesRenoSelected =this.listOfNemesRenoSelected+','+this.selected;
  }
  WantWorker(event:any)
  {
    
    let Temp=event.target.id;
    if(event.target.value){
    sessionStorage.setItem('WantWorker',Temp);
  }
    
  }
    Continue(){
      
      sessionStorage.setItem('CategorySelected',this.listOfNemesRenoSelected);
      this.Pup=true;

  
    }
  
}




