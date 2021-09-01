import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { RandomTwoComponent } from "./Country/random-two.component";
import { RandomThreeComponent } from "./company/random-three.component";
import { RandomComponent } from "./employee/random.component";
import { EpicFormComponent } from "./epic-form/epic-form.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FunctionalLocComponent } from "./forms/functional-loc/functional-loc.component";

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'form', component: EpicFormComponent},
    {path: 'functionalLoc', component: FunctionalLocComponent},
    {path: 'employee', component: RandomComponent},
    {path: 'country', component: RandomTwoComponent},
    {path: 'company', component: RandomThreeComponent},
    {path: "**", component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [DashboardComponent,
    RandomComponent,
    RandomTwoComponent,
    RandomThreeComponent,
    EpicFormComponent,
    FunctionalLocComponent,
    NotFoundComponent]