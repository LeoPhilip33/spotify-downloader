import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'spotify-downloader';
  inputEmptyHtml:boolean = true;
  cliBlock:string = 'style="display : none;"'

  inputEmpty(){
    this.inputEmptyHtml = false;
  }

  inputValue(valueUserInput:string){
    if(valueUserInput == ""){
      this.inputEmpty();
    }
    if(valueUserInput !== ""){
      this.inputEmptyHtml = true;
      this.cliBlock = 'style="display: flex;"';
    }
  }
}

