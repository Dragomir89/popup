import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CarRoutesModule } from './routes.module'
import { AppComponent } from './app.component';
import { UsersModule } from './components/users/users.model';
import { CoreModule } from './components/core/core.module'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatherialModule } from './material.module';

import { MyDialog } from './components/my-dyalog/my-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    MyDialog
  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,
    MatherialModule,

    FormsModule,
    UsersModule,
    CoreModule,
    CarRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MyDialog]
})
export class AppModule { }
