import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '',
        loadChildren:()=>import('./modules/mod/mod.module').then((m)=>m.ModModule) //back call (.then tells to wait till the function is compiled)
       },
    {
        path: 'search', loadChildren:()=> import('./modules/search/search.module').then((m)=> m.SearchModule)
    },
    {
        path: 'categories', loadChildren:()=> import('./modules/category/category.module').then((m)=>m.CategoryModule)
    }
];
