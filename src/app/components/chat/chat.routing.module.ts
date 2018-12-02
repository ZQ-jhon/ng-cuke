import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'qq', component: ChatComponent },
  { path: 'wechat', component: ChatComponent },
  { path: 'github', component: ChatComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class ChatRoutingModule { }
