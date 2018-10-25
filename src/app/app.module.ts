import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SPArouting } from './app.routing'
import { FormsModule } from '@angular/forms'
import { AlwaysAuthGuard } from './services/AlwaysAuthGuard';
import { LoginComponent } from './components/login.component';
import { ContactListComponent } from './components/contactlist.component';
import { NewContactComponent } from './components/newcontact.component';
import { ShowComponent } from './components/show.component';
import { ServiceComponent } from './components/service.component';



@NgModule({
  declarations: [
    AppComponent,LoginComponent,ContactListComponent,NewContactComponent,ShowComponent,ServiceComponent
  ],
  imports: [
    BrowserModule,FormsModule,SPArouting
  ],
  providers: [AlwaysAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
