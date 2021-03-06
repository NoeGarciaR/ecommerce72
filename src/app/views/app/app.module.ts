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
import {FormsModule, FormsModule as FormsModuleAngular, ReactiveFormsModule} from '@angular/forms';
import {ListProductsComponent} from "./products/list-products/list-products.component";
import {DashboardsContainersModule} from "../../containers/dashboards/dashboards.containers.module";
import { PaypalComponent } from './paypal/paypal.component';
import {ComponentsCardsModule} from "../../components/cards/components.cards.module";
import {ProductsModule} from "./products/products.module";


@NgModule({
  declarations: [BlankPageComponent, AppComponent, HomeComponent, ProyectsComponent, AddProyectComponent, ListProductsComponent, PaypalComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    ArchwizardModule,
    NgSelectModule,
    FormsModuleAngular,
    ReactiveFormsModule,
    FormsModule,
    DashboardsContainersModule,
    ComponentsCardsModule,
    ProductsModule
  ]
})
export class AppModule { }

