import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'convertToText'
})

export class ConvertToTextPipe implements PipeTransform {

    transform(value: number, text: string): string {
        if (value === 1) {
            return 'YES';
        } else {
            return 'NO';
        }
    }
}
