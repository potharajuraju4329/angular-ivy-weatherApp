import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsModule } from './components/details/details.module';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Home/details', loadChildren: () => DetailsModule },
  { path: '', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
