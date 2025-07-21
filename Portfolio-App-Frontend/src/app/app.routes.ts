import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [ {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
}, 
{
    path: 'projects', 
    component: ProjectsComponent
},
{
    path: 'about-me',
    component: AboutMeComponent
},
{
    path: 'contact',
    component: ContactComponent
}
];
