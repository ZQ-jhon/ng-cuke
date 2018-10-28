import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: AboutComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AboutRoutingModule { }
