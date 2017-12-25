import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../shared/image.service';
@Component({

    selector: 'app-g',
    templateUrl: './gallary.component.html',
    styleUrls: ['./gallary.component.css']

})

export class GallaryComponent implements OnChanges{
    title = 'Recent Photos';
    visibleImages: any[] = [];
    @Input() filterBy?: string = 'all';

    constructor(
        private imageService: ImageService
    ){
        this.visibleImages = this.imageService.getImages();
    }

    ngOnChanges() {
        this.visibleImages = this.imageService.getImages();
    }
}
