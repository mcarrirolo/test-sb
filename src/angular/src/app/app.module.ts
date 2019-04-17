import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { MainMenuComponent } from './main-menu/main-menu.component'; 
import { StartDialogComponent } from './start-dialog/start-dialog.component'
import { CloneDialogComponent } from './clone-dialog/clone-dialog.component'; 
import { SecurityDialogComponent } from './security-dialog/security-dialog.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input'; 
import {MatFormFieldModule} from '@angular/material';
import {MatListModule} from '@angular/material/list'; 
import {MatTreeModule} from '@angular/material/tree';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {CdkTreeModule} from '@angular/cdk/tree';
import { TreeComponent } from './tree/tree.component'; 
import {MatIconModule} from '@angular/material/icon'; 


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MainMenuComponent,
    StartDialogComponent,
    CloneDialogComponent,
    SecurityDialogComponent,
    TreeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatTreeModule,
    MatSnackBarModule,
    CdkTreeModule,
    MatIconModule,
  ],
  entryComponents: [StartDialogComponent,
                    CloneDialogComponent,
                    SecurityDialogComponent,
                  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
