import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import Speech from 'speak-tts';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { MainService } from 'src/app/shared/services/main.service';
import { artical } from 'src/app/shared/models/Artical.model';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: boolean = true;
  places: string[];
  closeResult: string;
 
  inOrOut: boolean;
  sentEmail1: string;
  sentEmail2: string;
  sentEmail3: string;
  html = '';
  result = '';
  speech: any;
  speechData: any;
  stringToRead: string = "";
  mark: boolean = false;
  bold: boolean = false;
  regular: boolean = true;
  contentttt: any;
  stop: boolean = false;
  added : boolean = false;
  fontSize = 18;
  @ViewChild('para', { static: true }) para: ElementRef;

  listArtical:artical[]=[];
  constructor( private modalService: NgbModal,private MainService:MainService,
    @Inject(DOCUMENT) document, private router: Router) {
      
 
    }
ListWorkers=[{IdWorker:22223333,AVGStare:233,Email_Worker:"aaa@ffg.com",Name_Worker:"moshe"},
{IdWorker:2345,AVGStare:25,Email_Worker:"zdfkvbl@ffg.com",Name_Worker:"yosef"},
{IdWorker:234564,AVGStare:675,Email_Worker:"xzvxcx@ffg.com",Name_Worker:"chya"},
{IdWorker:345643,AVGStare:25,Email_Worker:"zdfkvbl@ffg.com",Name_Worker:"yosef"}]


    GoToCategory()
    {
      this.router.navigate(["/category"])
  
    }
    GETArtical()
    {
        this.MainService.GetlistArticals().subscribe(a=> 
          {this.listArtical= a;})
    }
    ar:artical;
    SelectedArtical(Artical:artical)
    {
      sessionStorage.setItem('Artical', Artical.Title);
      this.router.navigate(["/app-Artical"])
    }
  ngOnInit(): void {
   
let lisss=this.ListWorkers.sort((a,b)=> a.Name_Worker.localeCompare(b.Name_Worker)).sort((a,b)=> a.IdWorker-b.IdWorker);
console.log(lisss);

}}
