import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildrenRoutes, ModRoutingModule } from './authentication-routing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModRoutingModule,
    FormsModule,
    RouterModule.forChild(ChildrenRoutes),
  ],
  exports: [RouterModule],
})
export class ModModule {}
