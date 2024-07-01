import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'search', loadChildren:()=> import('./modules/search/search.module').then((m)=> m.SearchModule)
    },
    {
        path: 'categories', loadChildren:()=> import('./modules/category/category.module').then((m)=>m.CategoryModule)
    }
];
