import { ProjectsComponent } from './projects.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectsRoutingModule } from './projects.routing.module';

const COMPONENTS = [
  ProjectsComponent,
];
@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
  ],
})
export class ProjectsModule { }
