import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat.routing.module';

const COMPONENTS = [
  ChatComponent,
];
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
  ],
  entryComponents: [
    [...COMPONENTS],
  ]
})
export class ChatModule { }
