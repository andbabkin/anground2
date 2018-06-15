import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SkillsComponent } from './skills/skills.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { MbuttonsComponent } from './mbuttons/mbuttons.component';

const routes: Routes = [
  { path: 'list', component: SkillsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: SkillDetailComponent },
  { path: 'mb', component: MbuttonsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
