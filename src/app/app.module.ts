import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule } from 'primeng/panel'; 
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from "@angular/forms";
import {CardModule} from 'primeng/card';
import {TreeModule} from 'primeng/tree';
import { TabViewModule } from 'primeng/tabview';
import { PanelMenuModule } from "primeng/panelmenu";
import {MegaMenuModule} from 'primeng/megamenu';
import {ToolbarModule} from 'primeng/toolbar';
import {LightboxModule} from 'primeng/lightbox';
import {CarouselModule} from 'primeng/carousel';
import {RatingModule} from 'primeng/rating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicComponent } from './core/music/music.component';
import { TopListComponent } from './core/music/top-list/top-list.component';
import { SportComponent } from './core/sport/sport.component';
import { TopList100AllOfTimeComponent } from './core/music/top-list/Components/top-list100-all-of-time/top-list100-all-of-time.component';
import { MainComponent } from './core/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicComponent,
    TopListComponent,
    SportComponent,
    TopList100AllOfTimeComponent,
    MainComponent
  ],
  imports: [
    RatingModule,
    LightboxModule,
    ToolbarModule,
    MegaMenuModule,
    PanelMenuModule,
    TabViewModule,
    TreeModule,
    CardModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    DataViewModule,
    DropdownModule,
    PanelModule,
    DialogModule,
    FormsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
