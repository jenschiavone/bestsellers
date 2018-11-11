import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBooks'
})
export class SearchBooksPipe implements PipeTransform {

  transform(pipeData, pipeModifier): any {
    return pipeData.filter(item => {
      return (
        item['title'].toLowerCase().includes(pipeModifier.toLowerCase())
      )
    });
  }

}
