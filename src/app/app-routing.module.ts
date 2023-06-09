import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReadComponent } from './read/read.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
	{path: 'post/:slug/:id', component: ReadComponent},
	{path: 'category/:id', component: CategoryComponent},
    {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
