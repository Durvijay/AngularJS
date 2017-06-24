import { Recipe } from '../recipe.model';
import {Component} from '@angular/core'

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html'
})

export class RecipeListComponent {
 recipes: Recipe[] = [new Recipe('A Test Recipe','This is simply a test','https://www.chowstatic.com/assets/2014/09/28484_smoked_ribs_3000.jpg'),
                      new Recipe('A Test Recipe','This is simply a test','https://www.chowstatic.com/assets/2014/09/28484_smoked_ribs_3000.jpg')];
  }

