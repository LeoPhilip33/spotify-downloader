import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'spotify-downloader';
  inputEmptyHtml:string = "display: none;";
  cliBlock:string = "display : none;"

  inputEmpty(){
    this.inputEmptyHtml = "";
  }

  inputValue(valueUserInput:string){
    if(valueUserInput == ""){
      this.inputEmpty();
    }
    if(valueUserInput !== ""){
      this.inputEmptyHtml = "display: none;";
      this.cliBlock = "display: flex;";
    }
  }
}

