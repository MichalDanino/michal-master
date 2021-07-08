import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import Speech from 'speak-tts';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';


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

  listArtical:string[]=[];
  constructor( private modalService: NgbModal,
    @Inject(DOCUMENT) document, private router: Router) {
      this.listArtical = ["a", "b", "c", "d"];
 
    }

    GoToCategory()
    {
      this.router.navigate(["/category"])
  
    }
  ngOnInit(): void {
   


}}
