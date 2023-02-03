import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number): String  {
    return (value<0? "- "  : "+ ") + Math.abs(value);
  }

}
