import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContainerComponent } from './core/container/container.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   {
      path: '',
      component: ContainerComponent,
      children: [
         {
            path: '',
            component: HomeComponent
         }
      ]
   }
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule]
})
export class AppRoutingModule {}
