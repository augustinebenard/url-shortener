import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortenUrlComponent } from './shorten-url/shorten-url.component';

const routes: Routes = [
  { path: '', redirectTo: '/url', pathMatch: 'full' },
  { path: 'url', component: ShortenUrlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
