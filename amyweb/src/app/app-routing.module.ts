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
import { AmyGrandparentsComponent } from './amy-grandparents/amy-grandparents.component';
import { AmySiblingsComponent } from './amy-siblings/amy-siblings.component';
import { AmysTwinComponent } from './amys-twin/amys-twin.component';
import { AmysPetsComponent } from './amys-pets/amys-pets.component';
import { BennyComponent } from './benny/benny.component';
import { GenoComponent } from './geno/geno.component';
import { SnickersComponent } from './snickers/snickers.component';
import { BubblesComponent } from './bubbles/bubbles.component';
import { MomComponent } from './mom/mom.component';
import { DadComponent } from './dad/dad.component';
import { PigsComponent } from './pigs/pigs.component';
import { ZebrasComponent } from './zebras/zebras.component';
import { KatieComponent } from './katie/katie.component';
import { TimmyComponent } from './timmy/timmy.component';
import { KurtComponent } from './kurt/kurt.component';
import { AuntDebbieComponent } from './aunt-debbie/aunt-debbie.component';
import { AuntJeannieComponent } from './aunt-jeannie/aunt-jeannie.component';
import { AuntJoComponent } from './aunt-jo/aunt-jo.component';
import { AuntKathyComponent } from './aunt-kathy/aunt-kathy.component';
import { AuntLindaComponent } from './aunt-linda/aunt-linda.component';
import { GodAuntDebbieComponent } from './god-aunt-debbie/god-aunt-debbie.component';
import { GodAuntMichelleComponent } from './god-aunt-michelle/god-aunt-michelle.component';
import { AuntNancyComponent } from './aunt-nancy/aunt-nancy.component';
import { AuntMaryComponent } from './aunt-mary/aunt-mary.component';
import { HufkerAuntsAndUnclesComponent } from './hufker-aunts-and-uncles/hufker-aunts-and-uncles.component';
import { HufkerAuntsComponent } from './hufker-aunts/hufker-aunts.component';
import { HufkerUnclesComponent } from './hufker-uncles/hufker-uncles.component';
import { WillAuntsAndUnclesComponent } from './will-aunts-and-uncles/will-aunts-and-uncles.component';
import { WillAuntsComponent } from './will-aunts/will-aunts.component';
import { WillUnclesComponent } from './will-uncles/will-uncles.component';
import { UncleRickComponent } from './uncle-rick/uncle-rick.component';
import { UncleKennyComponent } from './uncle-kenny/uncle-kenny.component';
import { UncleDanComponent } from './uncle-dan/uncle-dan.component';
import { UncleJeffComponent } from './uncle-jeff/uncle-jeff.component';


const routes: Routes = [

  { path: ' ', component: AmyElizabethRoseHufkerComponent },
  { path: 'AmyElizabethRoseHufkerComponent', component: Hufker6Component },
  { path: 'Hufker6Component', component: AmyParentsComponent },
  { path: 'AmyParentsComponent', component: MomComponent },
  { path: 'MomComponent', component: DadComponent },
  { path: 'DadComponent', component: AmysTwinComponent },
  { path: 'AmysTwinComponent', component: KatieComponent },
  { path: 'KatieComponent', component: AmySiblingsComponent },
  { path: 'AmySiblingsComponent', component: KatieComponent },
  { path: 'KatieComponent', component: TimmyComponent },
  { path: 'TimmyComponent', component: KurtComponent },
  { path: 'KurtComponent', component: AmysPetsComponent },
  { path: 'AmysPetsComponent', component: BennyComponent },
  { path: 'BennyComponent', component: GenoComponent },
  { path: 'GenoComponent', component: SnickersComponent },
  { path: 'SnickersComponent', component: BubblesComponent },
  // { path: 'BubblesComponent', component: BennyComponent },
  { path: 'BennyComponent', component: EhlersDanlosComponent },
  { path: 'EhlersDanlosComponent', component: TwinsComponent },
  { path: 'TwinsComponent', component: TwosetsoftwinsComponent },
  { path: 'TwosetsoftwinsComponent', component: AutismComponent },
  { path: 'AutismComponent', component: AmysTwinComponent },
  { path: 'AmysTwinComponent', component: SleepApneaComponent },
  { path: 'SleepApneaComponent', component: REMSleepBehaviorDisorderComponent },
  { path: 'REMSleepBehaviorDisorderComponent', component: HufkerFamilyComponent },
  { path: 'HufkerFamilyComponent', component: WillFamilyComponent },
  { path: 'WillFamilyComponent', component: Trisomy12pComponent },
  { path: 'Trisomy12pComponent', component: TwoSetsOfTwinsComponent },
  { path: 'TwoSetsOfTwinsComponent', component: BorderlinePersonalityDisorderComponent },
  { path: 'BorderlinePersonalityDisorderComponent', component: BipolarComponent },
  { path: 'BipolarComponent', component: AmyGrandparentsComponent },
  { path: 'AmyGrandparentsComponent', component: Hufker6Component },
  { path: 'Hufker6Component', component: MadelungsDeformityComponent },
  { path: 'MadelungsDeformityComponent', component: WeilerFamilyComponent },
  { path: 'WeilerFamilyComponent', component: PigsComponent },
  { path: 'PigsComponent', component: ZebrasComponent },
  //

  { path: 'ZebrasComponent', component: HufkerAuntsAndUnclesComponent },
  { path: 'HufkerAuntsAndUnclesComponent', component: HufkerAuntsComponent },
  { path: 'HufkerAuntsComponent', component: AuntDebbieComponent },
  { path: 'AuntDebbieComponent', component: AuntJoComponent },
  { path: 'AuntJoComponent', component: AuntLindaComponent },
  { path: 'AuntLindaComponent', component: HufkerUnclesComponent },
  { path: 'HufkerUnclesComponent', component: UncleRickComponent },
  { path: 'UncleRickComponent', component: UncleKennyComponent },
  { path: 'UncleKennyComponent', component: UncleDanComponent },
  { path: 'UncleDanComponent', component: UncleJeffComponent },

  // { UncleJeffComponentpath: '', component: WillAuntsAndUnclesComponent },
  // { path: 'WillAuntsAndUnclesComponent', component: WillAuntsComponent },
  // { path: 'WillAuntsComponent', component: AuntJeannieComponent },
  // { path: 'AuntJeannieComponent', component: AuntKathyComponent },
  // { path: 'AuntKathyComponent', component: AuntNancyComponent },
  // { path: 'AuntNancyComponent', component: AuntMaryComponent },
  // { path: 'AuntMaryComponent', component: WillUnclesComponent },
  // //
  // { WillUnclesComponentpath: '', component: AuntJeannieComponent },




  // { AuntJeannieComponentpath: '', component: AuntLindaComponent },
  // { path: 'AuntLindaComponent', component: GodAuntDebbieComponent },
  // { path: 'GodAuntDebbieComponent', component: GodAuntMichelleComponent },

  // { GodAuntMichelleComponentpath: '', component: AuntJoComponent },
  // { path: 'AuntJoComponent', component: AuntDebbieComponent },
  // { path: 'AuntDebbieComponent', component: AuntJeannieComponent },
  // { path: 'AuntJeannieComponent', component: AuntJoComponent },
  // { path: 'AuntJoComponent', component: AuntDebbieComponent },
  // { path: 'AuntDebbieComponent', component: AuntJeannieComponent },
  // { path: 'AuntJeannieComponent', component: AuntJoComponent },
  // { path: 'AuntJoComponent', component: AuntDebbieComponent },
  // { path: 'AuntDebbieComponent', component: AuntJeannieComponent },
  // { path: 'AuntJeannieComponent', component: AuntJoComponent },
  // { path: 'AuntJoComponent', component: AuntDebbieComponent },
  // { path: 'AuntDebbieComponent', component: AuntJeannieComponent },
  // { path: 'AuntJeannieComponent', component: AuntJoComponent },
  // { path: 'AuntJoComponent', component: AuntDebbieComponent },
  // { path: 'AuntDebbieComponent', component: AuntJeannieComponent },
  // { path: 'AuntJeannieComponent', component: AuntJoComponent },
  // { path: 'AuntJoComponent', component: AuntDebbieComponent },
  // { path: 'AuntDebbieComponent', component: AuntJeannieComponent },
  // { path: 'AuntJeannieComponent', component: AuntJoComponent },
  // { path: 'AuntJoComponent', component: AuntDebbieComponent },
  // { path: 'AuntDebbieComponent', component: AuntJeannieComponent },
  // { path: 'AuntJeannieComponent', component: AuntJoComponent },
  // { path: 'AuntJoComponent', component: AuntDebbieComponent },
  // { path: 'AuntDebbieComponent', component: AuntJeannieComponent },
  // { path: 'AuntJeannieComponent', component: AuntJoComponent },
  // { path: 'AuntJoComponent', component: AuntDebbieComponent },
  // { path: 'AuntDebbieComponent', component: AuntJeannieComponent },
  // { path: 'AuntJeannieComponent', component: AuntJoComponent },
  // { path: 'AuntJoComponent', component: AuntDebbieComponent },
  // { path: 'AuntDebbieComponent', component: AuntJeannieComponent },
  // { path: 'AuntJeannieComponent', component: AuntJoComponent },
  // { path: 'AuntJoComponent', component: AuntDebbieComponent },
  // { path: 'AuntDebbieComponent', component: AuntJeannieComponent },
  // { path: 'AuntJeannieComponent', component: AuntJoComponent },
  // { path: 'AuntJoComponent', component: AuntDebbieComponent },
  // { path: 'AuntDebbieComponent', component: AuntJeannieComponent },
  // { path: 'AuntJeannieComponent', component: AuntJoComponent },

  // { AuntJoComponentpath: '', component: GenoComponent },
  // { path: 'GenoComponent', component: SnickersComponent },
  // { path: 'SnickersComponent', component: BubblesComponent },
  // { path: 'BubblesComponent', component: MomComponent },
  // { path: 'MomComponent', component: DadComponent },
  // { path: 'DadComponent', component: PigsComponent },
  // { path: 'PigsComponent', component: ZebrasComponent },
  // { path: 'ZebrasComponent', component: KatieComponent },
  // { path: 'KatieComponent', component: BubblesComponent },
  // { path: 'BubblesComponent',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  // { path: 'first-component', component: FirstComponent },
  // { path: 'second-component', component: SecondComponent },
  // { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
