import { Component } from '@angular/core';
import { RandomService } from '../service/random.service';

@Component({
  selector: 'app-typemaster',
  templateUrl: './typemaster.component.html',
  styleUrls: ['./typemaster.component.css']
})
export class TypemasterComponent {
  myText : string='';
  enteredText:string='';

  constructor(private rs:RandomService){}

  //this method will execute whenever
  ngOnInit(){
    console.log('me toh chalega')
    this.randomSentence();
  }

  onInput(value:string){
    this.enteredText=value;
    console.log(this.enteredText)
  }
  compare(tl:string,el:string){
    if(!el) return "pending";
    return tl === el ?"correct": "incorrect";

  }
  randomSentence(){
    this.rs.getRandomQuote().subscribe(res=>{
      this.myText=res;
      console.log(this.myText);
    })
    this.myText
  }
}
