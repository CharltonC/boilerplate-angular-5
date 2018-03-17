import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demoPipe'
})
export class DemoLowercasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // return null;
    return value.toLowerCase();
  }

}
