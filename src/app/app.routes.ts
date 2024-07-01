import { Routes } from '@angular/router';

export const routes: Routes = [
    {   
        path: '', loadChildren:()=>import('./modules/authentication/authentication.module').then((m)=>m.ModModule)
    },
    {
        path: 'search', loadChildren:()=> import('./modules/homepage/search.module').then((m)=> m.SearchModule), 
    },
    {
        path: 'categories', loadChildren:()=> import('./modules/category/category.module').then((m)=>m.CategoryModule)
    }
];
