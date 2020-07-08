import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Web2Component }    from './web2/web2.component';
import { Web1Component }  from './web1/web1.component';
import {AdminComponent} from './admin/admin.component';
const heroesRoutes: Routes = [
  {path:'Web1' ,component:Web1Component},
  {path:'Web2' ,component:Web2Component},
  {path:'Admin' ,component:AdminComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TemplateRoutingModule { }
