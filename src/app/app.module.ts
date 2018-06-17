import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { ServiceWorkerModule } from '@angular/service-worker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule,
  MatListModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MbuttonsComponent } from './mbuttons/mbuttons.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillDetailComponent } from './skill-detail/skill-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

/*const MODULE_BASE_HREF = '/mlden/public';*/

@NgModule({
  declarations: [
    AppComponent,
    MbuttonsComponent,
    SkillsComponent,
    SkillDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule.forRoot(),
    MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatToolbarModule, MatMenuModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
