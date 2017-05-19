import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";

// the routing settings are allocated to a separate module

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "home",
            pathMatch: "full"
        },
        { path: "home", component: HomeComponent },
    ])],
    exports: [RouterModule] // re-export module for using directives during routing
})
export class AppRoutingModule { }