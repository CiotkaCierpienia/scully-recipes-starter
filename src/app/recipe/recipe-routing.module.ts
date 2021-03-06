import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SingleRecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CategoryRecipeListComponent } from './category-recipe-list/category-recipe-list.component';

const routes = [
  { path: '', component: RecipeListComponent },
  { path: ':page', component: RecipeListComponent },
  { path: 'recipe/:slug', component: SingleRecipeComponent },
  { path: 'category/:slug', component: CategoryRecipeListComponent },
  { path: 'category/:slug/:page', component: CategoryRecipeListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
