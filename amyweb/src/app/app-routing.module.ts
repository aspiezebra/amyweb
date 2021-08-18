import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EhlersDanlosComponent } from './ehlers-danlos/ehlers-danlos.component';
import { AutismComponent } from './autism/autism.component';


const routes: Routes = [
  { path: ' ', component: EhlersDanlosComponent },
  { path: ' ', component: AutismComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
