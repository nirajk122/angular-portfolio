import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{path:'blogs',
component:BlogsComponent
},
{path:'portfolio',
component:PortfolioComponent
},
{path: '',
redirectTo: '../portfolio',
pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
