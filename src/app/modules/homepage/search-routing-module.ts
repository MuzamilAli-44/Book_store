import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


export const ChildrenRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./search-bar/search-bar.component').then(
        (m) => m.SearchBarComponent
      ),
  },
  {
    path: 'add-book',
    loadComponent: () =>
      import('./add-book/add-book.component').then((c) => c.AddBookComponent),
  },
];

@NgModule({
    imports: [RouterModule.forChild(ChildrenRoutes)],
    exports: [RouterModule],
  })
  export class SearchRoutingModule {}
  