import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { HomeComponent } from './home/home.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { AddProyectComponent } from './add-proyect/add-proyect.component';
import {ArchwizardModule} from "angular-archwizard";
import {NgSelectModule} from "@ng-select/ng-select";
import { FormsModule as FormsModuleAngular } from '@angular/forms';


@NgModule({
  declarations: [BlankPageComponent, AppComponent, HomeComponent, ProyectsComponent, AddProyectComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    ArchwizardModule,
    NgSelectModule,
    FormsModuleAngular
  ]
})
export class AppModule { }

