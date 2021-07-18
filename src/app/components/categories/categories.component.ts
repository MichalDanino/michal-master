import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/shared/services/category.service';
import { MaterialService } from 'src/app/shared/services/material.service';
import { Help } from 'src/app/shared/models/ClassHelp.model';
 
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})


export class CategoriesComponent implements OnInit {
  
  
  checked: boolean = false;
  ListImag:string[]
  searchText: string;
  Pup:boolean =false;
  listCategorySelected:Help[]=[]
  listOfNemesRenoSelected:string;
  listOfCategory:string[]=[]
  help:Help;

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
  
  
  checkedCategory(event:any,index)
  {
    this.help=new Help();
    
    let o  = event.target.checked
    if(event.target.checked)
    {
      this.help.code=index
      this.help.Str=event.target.id;
      this.listCategorySelected.push (this.help)
    }
    else{
      let y= this.listCategorySelected.findIndex(a=> a.code==index)
     this.listCategorySelected.splice(y,1)
      
    }
    console.log(this.listCategorySelected)
     
  
  }
  WantWorker(event:any)
  {
    
    let Temp=event.target.id;
    if(event.target.value)
    {
    sessionStorage.setItem('WantWorker',Temp);
  
    }
    
  }
    Continue(){
     this.listCategorySelected.forEach(element => {
      this.listOfNemesRenoSelected= element.Str+","+this.listOfNemesRenoSelected
     });
      sessionStorage.setItem('CategorySelected',this.listOfNemesRenoSelected);
      this.Pup=true;

  
    }
  
}




