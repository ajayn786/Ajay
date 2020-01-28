import { Pipe, PipeTransform } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], filetText:StringifyOptions): any {
    if(!value) return value;
    if(!filetText) return value;
    return value.filter(resp=>resp.name.toLowerCase().includes(filetText));
  }

}
