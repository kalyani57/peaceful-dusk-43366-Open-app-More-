import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

    visibleImages = [];

    getImages() {
        return this.visibleImages = Image.slice(0);
    }

    getImage(id: number) {
        return Image.slice(0).find(image => image.id == id)

    }
}

const Image = [
    {"id":1, "category":"tree", "caption":"view from here", "url": "assets/Sphoto/tree_sun.jpg"},
    {"id":2, "category":"tree", "caption":"view from here", "url": "assets/Sphoto/tree_.jpg"},
    {"id":3, "category":"tree", "caption":"view from here", "url": "assets/Sphoto/tree.jpg"},

    {"id":4, "category":"black_and_white", "caption":"Black and whte view", "url": "assets/Sphoto/bw.jpg"},
    {"id":5, "category":"black_and_white", "caption":"Black and whte view", "url": "assets/Sphoto/fav_bw.jpg"},

    {"id":6, "category":"something", "caption":"View something", "url": "assets/Sphoto/somthing.jpg"},
    {"id":7, "category":"something", "caption":"View something", "url": "assets/Sphoto/1.jpg"},
    {"id":8, "category":"something", "caption":"View something", "url": "assets/Sphoto/hut.jpg"},
    {"id":9, "category":"something", "caption":"View something", "url": "assets/Sphoto/view.jpg"},

    {"id":10, "category":"self_obssesion", "caption":"self_obssesion", "url": "assets/Sphoto/self_obssesion.jpg"},
]
