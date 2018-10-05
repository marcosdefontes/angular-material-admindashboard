import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from './material';

import { ContainerComponent } from './container/container.component';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { UserMenuComponent } from './ui/user-menu/user-menu.component';

@NgModule({
   imports: [SharedModule, MaterialModule, RouterModule],
   declarations: [
      ContainerComponent,
      HomeComponent,
      MainMenuComponent,
      HeaderComponent,
      FooterComponent,
      UserMenuComponent
   ]
})
export class CoreModule {}
