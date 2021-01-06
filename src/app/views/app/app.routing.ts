import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import {ProyectsComponent} from "./proyects/proyects.component";
import {AddProyectComponent} from "./add-proyect/add-proyect.component";
import {ListProductsComponent} from "./products/list-products/list-products.component";
import {PaypalComponent} from "./paypal/paypal.component";

const routes: Routes = [
    {
        path: '', component: AppComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'proyects' },
            { path: 'vien', loadChildren: () => import('./vien/vien.module').then(m => m.VienModule) },
            { path: 'second-menu', loadChildren: () => import('./second-menu/second-menu.module').then(m => m.SecondMenuModule) },
            { path: 'blank-page', component: BlankPageComponent },
            { path: 'proyects', component: ProyectsComponent },
            { path: 'add-proyect', component: AddProyectComponent },
            { path: 'list', component: ListProductsComponent },
            { path: 'paypal', component: PaypalComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
