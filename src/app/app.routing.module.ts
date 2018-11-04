import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './components/app-entry/hello.component';

const Route: Routes = [
  { path: 'projects', loadChildren: './components/projects/projects.module#ProjectsModule' },
  { path: 'chat', loadChildren: './components/chat/chat.module#ChatModule' },
  { path: 'about', loadChildren: './components/about/about.module#AboutModule' },
  { path: 'index', component: HelloComponent },
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: '**', redirectTo: 'index', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(Route),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
