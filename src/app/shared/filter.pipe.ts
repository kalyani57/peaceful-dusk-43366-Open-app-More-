import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'imageFilterPipe'})
export class ItemFilterPipe implements PipeTransform {

    transform(item: any[], criteria:string): any {
        if(criteria ==='all') {return item} else
            return item.filter(item => {
                return item.category === criteria;
            })
    }

}
