import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { CommonModule } from '@angular/common';

const Component = [
  AboutComponent,
]
@NgModule({
  imports: [
    AboutRoutingModule,
    CommonModule,
  ],
  declarations: [...Component],
  entryComponents: [AboutComponent],
  exports: [AboutComponent],
})
export class AboutModule { }
