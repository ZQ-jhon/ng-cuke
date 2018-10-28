import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

const Component = [
  AboutComponent,
]
@NgModule({
  imports: [
    AboutRoutingModule,
  ],
  declarations: [...Component],
  entryComponents: [AboutComponent],
  exports: [AboutComponent],
})
export class AboutModule { }
