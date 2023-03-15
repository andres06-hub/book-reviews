import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orDefault',
})
export class OrDefaultPipe implements PipeTransform {
  transform(value: unknown, defaultValue: string = ''): string {
    return value ? value.toString() : defaultValue;
  }
}
