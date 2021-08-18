import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EhlersDanlosComponent } from './ehlers-danlos/ehlers-danlos.component';
import { AutismComponent } from './autism/autism.component';
import { SleepApneaComponent } from './sleep-apnea/sleep-apnea.component';
import { TwinsComponent } from './twins/twins.component';
import { TwosetsoftwinsComponent } from './twosetsoftwins/twosetsoftwins.component';
import { REMSleepBehaviorDisorderComponent } from './remsleep-behavior-disorder/remsleep-behavior-disorder.component';
import { HufkerFamilyComponent } from './hufker-family/hufker-family.component';
import { WillFamilyComponent } from './will-family/will-family.component';
import { WeilerFamilyComponent } from './weiler-family/weiler-family.component';
import { Trisomy12pComponent } from './trisomy12p/trisomy12p.component';
import { TwoSetsOfTwinsComponent } from './two-sets-of-twins/two-sets-of-twins.component';
import { BorderlinePersonalityDisorderComponent } from './borderline-personality-disorder/borderline-personality-disorder.component';
import { BipolarComponent } from './bipolar/bipolar.component';
import { Hufker6Component } from './hufker6/hufker6.component';
import { AmyParentsComponent } from './amy-parents/amy-parents.component';
import { MadelungsDeformityComponent } from './madelungs-deformity/madelungs-deformity.component';
import { AmyElizabethRoseHufkerComponent } from './amy-elizabeth-rose-hufker/amy-elizabeth-rose-hufker.component';


const routes: Routes = [

  { path: '', component: AmyElizabethRoseHufkerComponent },
  { path: '', component: EhlersDanlosComponent },
  { path: '', component: TwinsComponent },
  { path: '', component: TwosetsoftwinsComponent },
  { path: '', component: AutismComponent },
  { path: '', component: SleepApneaComponent },
  { path: '', component: REMSleepBehaviorDisorderComponent },
  { path: '', component: HufkerFamilyComponent },
  { path: '', component: WillFamilyComponent },
  { path: '', component: Trisomy12pComponent },
  { path: '', component: TwoSetsOfTwinsComponent },
  { path: '', component: BorderlinePersonalityDisorderComponent },
  { path: '', component: BipolarComponent },
  { path: '', component: Hufker6Component },
  { path: '', component: AmyParentsComponent },
  { path: '', component: MadelungsDeformityComponent },
  { path: '', component: AmyParentsComponent },
  { path: '', component: WeilerFamilyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
