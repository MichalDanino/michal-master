import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { feedbake } from 'src/app/shared/models/FeedBake.model';
import { SearchOfSelectionUser } from 'src/app/shared/models/SearchOfSelectionUser.model';
import { SelectionUser } from 'src/app/shared/models/selectionUser.model';
import { MainService } from 'src/app/shared/services/main.service';

@Component({
  selector: 'app-feed-bake',
  templateUrl: './feed-bake.component.html',
  styleUrls: ['./feed-bake.component.css']
})
export class FeedBakeComponent implements OnInit {
  @ViewChild ('myData',{static:false}) DateS:ElementRef;

  listDate:SelectionUser[]=[]
feedbake:feedbake
listSElectionUser:SearchOfSelectionUser[]=[]
Pup:boolean=false

  constructor(private mainService:MainService) { }

  ngOnInit(): void {
    this.getDate()
  }
  getDate()
  {
    let id  =sessionStorage.getItem('IDUser')
    this.mainService.GetDateOfSelection(id).subscribe(a=> {
      this.listDate=a
    })
  }
  getSearchOfSelectionUser()
  {
    let g =this.DateS.nativeElement.value;
    this.mainService.GetSelectionUsern(g).subscribe(a=> {
      this.listSElectionUser=a;
    })
  
  }
  SendToLerning()
  {
    this.mainService.SentTOlERNING(this.feedbake).subscribe(a=> {
      
    })
  }
  yes()
  {
    this.feedbake=new feedbake();
  }
  
  

}
