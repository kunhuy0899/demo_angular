import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { Web2Component }    from './web2/web2.component';
import { Web1Component }  from './web1/web1.component';
import { AdminComponent }  from './admin/admin.component';

import { TemplateRoutingModule } from './template-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ],
  declarations: [
    Web2Component,
    Web1Component,
    AdminComponent
  ]
})
export class TemplateModule {}
