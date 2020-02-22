import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
      NavbarComponent,
      LoginComponent,
  ],
  imports: [  
  ],
  exports: [
      NavbarComponent
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
