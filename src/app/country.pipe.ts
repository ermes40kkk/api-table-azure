import { Pipe, PipeTransform } from '@angular/core';
import { Bills } from './data';

@Pipe({ name: 'datasource' })
export class CountryPipe implements PipeTransform {
  transform(values: Bills[], filter: string): Bills[] {
    if (!filter || filter.length === 0) {
      return values;
    }

    if (values.length === 0) {
        return values;
    }


    values = values.filter((value: Bills) => {
        const nameFound =
            value.Name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
        const capitalFound =
            value.Number.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

        if (nameFound || capitalFound) {
            return value;
        }else{
            return null;
        }
    });
    if (!values) {
        return [];
    }
    return values; // Add this line to return an empty array if no value is found
  }
}
