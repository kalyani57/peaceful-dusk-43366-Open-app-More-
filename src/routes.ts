import { Routes } from '@angular/router';
import { GallaryComponent } from './app/gallary/gallary.component';
import { ImageComponent } from './app/image/image.component';

export const appRoutes:Routes = [
    {
        path: "gallary",
        component: GallaryComponent
    },
    {
        path: "image/:id",
        component: ImageComponent
    },
    {
        path: "",
        redirectTo: "/gallary",
        pathMatch: 'full',
    },



]
