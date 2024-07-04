import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChildrenRoutes, SearchRoutingModule } from './search-routing-module';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [{ path: 'add-book', component: AddBookComponent }];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(ChildrenRoutes),
    AddBookComponent,
    SearchRoutingModule,
  ],
  exports: [RouterModule, AddBookComponent],
})
export class SearchModule {}
