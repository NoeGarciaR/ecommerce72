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
import {PaginationModule} from "ngx-bootstrap/pagination";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {PagesContainersModule} from "../../containers/pages/pages.containers.module";
import {ListProductsComponent} from "./products/list-products/list-products.component";
import {ComponentsCarouselModule} from "../../components/carousel/components.carousel.module";
import {ComponentsCardsModule} from "../../components/cards/components.cards.module";
import {ComponentsChartModule} from "../../components/charts/components.charts.module";
import {RatingModule} from "ngx-bootstrap/rating";
import {HotkeyModule} from "angular2-hotkeys";
import {TabsModule} from "ngx-bootstrap/tabs";
import {ModalModule} from "ngx-bootstrap/modal";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {AccordionModule} from "ngx-bootstrap/accordion";
import {ContextMenuModule} from "ngx-contextmenu";


@NgModule({
  declarations: [BlankPageComponent, AppComponent, HomeComponent, ProyectsComponent, AddProyectComponent, ListProductsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    LayoutContainersModule,
    ArchwizardModule,
    NgSelectModule,
    FormsModuleAngular,
    FormsModule,
    PaginationModule.forRoot(),
    SharedModule,
    LayoutContainersModule,
    NgxDatatableModule,
    CollapseModule,
    PagesContainersModule,
    PaginationModule.forRoot(),
    SharedModule,
    ComponentsCarouselModule,
    LayoutContainersModule,
    PagesContainersModule,
    ComponentsCardsModule,
    ComponentsChartModule,
    RatingModule.forRoot(),
    FormsModuleAngular,
    ReactiveFormsModule,
    HotkeyModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    AccordionModule.forRoot(),
    ContextMenuModule.forRoot({
      useBootstrap4: true,
    })
  ]
})
export class AppModule { }

