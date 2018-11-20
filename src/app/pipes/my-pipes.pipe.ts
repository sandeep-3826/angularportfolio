import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipes'
})
export class MyPipesPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(args) {
      let arr=[];
      for(let i=0;i<args;i++) {
        arr.push(value[i]);
      }
      return arr;
    }
    else {
      return value;
    }
  }

}
