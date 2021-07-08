import { Component, ViewEncapsulation, OnInit, NgModule, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/shared/models/recipe.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { DialogService } from 'primeng/dynamicdialog';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { JsonpInterceptor } from '@angular/common/http';
import Speech from 'speak-tts';
import { DOCUMENT } from '@angular/common';
import { ViewChild, ElementRef } from '@angular/core';
import { VoteService } from 'src/app/shared/services/vote.service';



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [DialogService],
  styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})

export class RecipesComponent implements OnInit {
  style: boolean = false;
  added: boolean = false;
  categoryToSearchBy: string;
  treatSens: string;
  recipes: Recipe[];
  isEmpty: Recipe[];
  closeResult: string;
  currentRecipe: Recipe;
  inOrOut: boolean;
  voted: boolean = false;
  sentEmail1: string;
  sentEmail2: string;
  sentEmail3: string;
  html = '';
  result = '';
  speech: any;
  speechData: any;
  stringToRead: string = "";
  searchText: string;
  mark: boolean = false;
  bold: boolean = false;
  regular: boolean = true;
  contentttt: any;
  stop: boolean = true;
  fontSize = 18;
  imageSrc = 'url("../../../assets/backgroundImages/p9.jpg")';
  Src2 = 'url("../../../assets/backgroundImages/p99.jpg")';
  @ViewChild('para', { static: true }) para: ElementRef;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService,
    private router: Router, public dialogService: DialogService,
    private modalService: NgbModal, private recipeService: RecipeService,
    private voteService: VoteService) {
    this.style = false;
    this.mark = false;
    this.bold = false;
    this.regular = true;
    this.added = false;
    this.stop = false;
    this.speechConstractor();

  }

  //The first parameter is the component to be rendered in the modal's content
  //The second parameter is the modal's configuration



  ngOnInit(): void {
   //this.sentEmail1 = "https://mail.google.com/mail/u/0/?view=cm&fs=1&su=";
   //this.sentEmail2 = "&body=";
   //this.sentEmail3 = "&tf=1";
   //let allergies: number[];

   //this.route.params.subscribe(
   //  p => {
   //    allergies = JSON.parse(p.whatChecked)
   //    this.categoryService.searchText(p.search).subscribe(
   //      res => {
   //        this.searchText = res;
   //      });
   //    this.searchText = p.search;

   //    this.categoryService.googleSearch(p.search, JSON.parse(p.whatChecked)).subscribe(
   //      res => {
   //        this.stop = true;
   //        this.style = true;
   //        this.isEmpty = res;
   //        this.recipes = res;
   //        console.log(res)
   //        localStorage.setItem('last-search', JSON.stringify(res))
   //      },
   //      err => { console.error(err) }
   //    )

   //  });

   ////this.recipes = JSON.parse(localStorage.getItem('last-search'))

  }

  speechConstractor() {
    this.speech = new Speech() // will throw an exception if not browser supported
    if (this.speech.hasBrowserSupport()) { // returns a boolean
      console.log("speech synthesis supported")
      this.speech.init({
        'volume': 1,
        'lang': 'en-US',
        'rate': 0.7,
        'pitch': 1,
        'voice': 'Google US English',
        'splitSentences': true,
        'listeners': {
          'onvoiceschanged': (voices) => {
            console.log("Event voiceschanged", voices)
          }
        }
      }).then((data) => {
        // The "data" object contains the list of available voices and the voice synthesis params
        console.log("Speech is ready, voices are available", data)
        this.speechData = data;
        // data.voices.forEach(voice => {
        //   console.log(voice.name + " " + voice.lang)
        // });
      }).catch(e => {
        console.error("An error occured while initializing : ", e)
      })
    }
  }

  open(content, recipe) {

    // if (localStorage.getItem('voted-item') == recipe.url)
    //   this.voted = true;
    // else
      this.voted = false;

    this.added = false;
    this.mark = false;
    this.bold = false;
    this.regular = true;
    this.contentttt = content;
    this.currentRecipe = recipe;
    this.creatingString(this.currentRecipe.RecipeName, this.currentRecipe.Ingredients, this.currentRecipe.Method);
    this.sentEmail1 = "https://mail.google.com/mail/u/0/?view=cm&fs=1&su=";
    this.email(this.currentRecipe.RecipeName, this.currentRecipe.Ingredients, this.currentRecipe.Method);
    this.recipeService.checkIfRecipeExist(this.currentRecipe).subscribe(
      res => {
        this.inOrOut = res
        console.log(res)
        this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
          this.end();
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          this.end();
          this.sentEmail1 = "https://mail.google.com/mail/u/0/?view=cm&fs=1&su=";
        });
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      this.end();
      this.fontSize = 18;
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.end();
      this.fontSize = 18;
      return 'by clicking on a backdrop';
    } else {
      this.end();
      this.fontSize = 18;
      return `with: ${reason}`;
    }
  }



  addRecipeToCookbook(recipe: Recipe) {
    this.inOrOut = true;
    this.recipeService.addRecipeToCookbook(recipe).subscribe(
      res => {
        console.log(res);
        this.added = true;
      }),
      err => this.inOrOut = false
  }

  deleteRecipeFromCookbook(recipe: Recipe) {
    this.recipeService.deleteRecipeFromCookbook(recipe).subscribe(
      res => console.log(res));
  }

  email(subject: string, ingredients: string[], method: string[]) {
    this.sentEmail1 = this.sentEmail1.concat(subject);
    this.sentEmail1 = this.sentEmail1.concat(this.sentEmail2);
    this.sentEmail1 = this.sentEmail1.concat("%0A" + "ingredients" + "%0A");
    ingredients.forEach(a => {
      this.sentEmail1 = this.sentEmail1.concat(a + "%0A")
    }
    );
    this.sentEmail1 = this.sentEmail1.concat("%0A" + "instruction" + "%0A");
    method.forEach(a => this.sentEmail1 = this.sentEmail1.concat(a + "%0A"));
    this.sentEmail1 = this.sentEmail1.concat(this.sentEmail3);
    //console.log(this.sentEmail1)
  }


  print(recipeName): void {
    let printContents, popupWin;
    printContents = document.getElementById('printElement').innerHTML;
    //innerHtml doesn't work!
    //printContents= printContents.innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${recipeName} ${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }



  start() {
    console.log("sts=art start talking")
    this.speech.speak({
      text: this.stringToRead,
    }).then(() => {
      console.log("Success !")
    }).catch(e => {
      console.error("An error occurred :", e)
    })
    //this.stringToRead="";
  }

  creatingString(recipeName: string, ingredient: string[], method: string[]) {
    this.stringToRead = "";
    this.stringToRead = this.stringToRead.concat(recipeName);
    this.stringToRead = this.stringToRead.concat(".....ingredients...............");
    ingredient.forEach(a => this.stringToRead = this.stringToRead.concat(a + ". "));
    this.stringToRead = this.stringToRead.concat(".......instructions..........");
    method.forEach(a => this.stringToRead = this.stringToRead.concat(a + ". "));
    this.stringToRead = this.stringToRead.concat("......enjoy your meal!!")
  }

  pause() {
    this.speech.pause();
  }
  resume() {
    this.speech.resume();
  }
  end() {
    console.log("canceling");
    this.speech.cancel();
    this.speechConstractor();
  }

  setLanguage(i) {
    //console.log(i);
    //console.log(this.speechData.voices[i].lang + this.speechData.voices[i].name);
    this.speech.setLanguage(this.speechData.voices[i].lang);
    this.speech.setVoice(this.speechData.voices[i].name);
  }

  changeFont(operator) {
    operator === '+' ? this.fontSize++ : this.fontSize--;
  }

  marking() {
    if (this.mark == true) {
      this.mark = false;
      this.regular = true;
      this.bold = false;
    }
    else {
      this.mark = true;
      this.bold = false;
      this.regular = false;
    }
  }

  bolding() {
    if (this.bold == true) {
      this.bold = false;
      this.regular = true;
      this.mark = false;
    }
    else
      this.bold = true;
    this.mark = false;
    this.regular = false;
  }



  openWheelchair(wc) {
    this.modalService.open(wc, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason2(reason)}`;
    });
  }

  private getDismissReason2(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  addingVote(votedRecipe: Recipe) {
    //convert recipe to vote
   // this.voteRec.siteName = votedRecipe.Url;
   // this.voteRec.voteNumbers = 1;
   // this.voteService.addVote(this.voteRec).subscribe(
   //   res => {
   //     console.log(res);
   //     //unable the button  - like adding recipe to cookbook
   //     this.voted = true;
   //   });

   // localStorage.setItem('voted-item', votedRecipe.Url)
  }

}



