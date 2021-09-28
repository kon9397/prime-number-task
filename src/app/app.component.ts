import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task';
  primeNumberForm: FormGroup = new FormGroup({
    userSeconds: new FormControl('', [Validators.required])
  });
  numberArray: number[] = [];
  primeNumber: number = 0;

  timer: number = 0
  counter: number = 0;
  countdown: number = 0;

  
  ngOnInit():void {

  }

  onSubmit():void {
    const userValue = Number(this.primeNumberForm.value.userSeconds);

    if(userValue > 0) {
      this.getUserSeconds(userValue).subscribe(numArr => {
        this.numberArray = numArr;
        console.log(this.numberArray);
        this.primeNumber = this.maxPrime(this.numberArray);
        console.log(this.primeNumber);
      });
    }
  }
  
  
  maxPrime(num: number[]): number {
    let maxVal = num.sort((b, a) => a - b)[0];
 
    let prime = new Array(maxVal + 1).fill(true);
 
    prime[0] = false;
    prime[1] = false;
    for (let p = 2; p * p <= maxVal; p++) {
 
        if (prime[p] == true) {
 
            for (let i = p * 2; i <= maxVal; i += p)
                prime[i] = false;
        }
    }
 
    let maximum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < num.length; i++)
        if (prime[num[i]]) {
            maximum = Math.max(maximum, num[i]);
        }
 
    return maximum;
  }

  getUserSeconds(seconds: number):Observable<number[]> {
      return new Observable<number[]>(observer => {
        let currentSeconds = 1;
        let numbArr = [];
        this.countdown = seconds;
        const timer = setInterval(() => {
          
          if(currentSeconds === seconds) {
            clearInterval(counter);
            clearInterval(timer);
            observer.next(numbArr);
            observer.unsubscribe();
          }
          currentSeconds++;
          this.countdown--;

          
        }, 1000);


        let counter = setInterval(() => {
            this.counter++;
            numbArr.push(this.counter);
        }, 10)
        
      })    
  }
  



}
