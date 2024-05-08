import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomeComponent } from 'src/components/home/home.component';
import { AboutComponent } from 'src/components/about/about.component';
import { SkillsComponent } from 'src/components/skills/skills.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { ProjectsComponent } from 'src/components/projects/projects.component';
import { FooterComponent } from 'src/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    ProjectsComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
