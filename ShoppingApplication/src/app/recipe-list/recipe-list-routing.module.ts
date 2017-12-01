import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { RecipeListComponent } from "./recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { AuthGuardService } from "../auth/auth-guard.service";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RouterModule } from "@angular/router";

const recipeListRoutes: Routes = [
    {
        path: '', component: RecipeListComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuardService] },
            { path: ':id', component: RecipeDetailsComponent },
            { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuardService] }
        ]
    }
];



@NgModule({
    imports: [
        RouterModule.forChild(recipeListRoutes)
    ],
    exports: [RouterModule],
    providers: [AuthGuardService]

})
export class RecipeListRoutingModule {
}