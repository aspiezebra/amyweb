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
import { SignUpComponent } from './sign-up/sign-up.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { FormsComponent } from './forms/forms.component';
import { FillOutFormComponent } from './fill-out-form/fill-out-form.component';


const routes: Routes = [

  { path: 'Amy', component: AmyElizabethRoseHufkerComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'Benny', component: BennyComponent  },

  { path: 'form1', component: Form1Component },
  { path: 'form2', component: Form2Component },
  { path: 'form3', component: Form3Component },
  { path: 'form4', component: Form4Component },
  { path: 'forms', component: FormsComponent },
  { path: 'Hufker6', component: Hufker6Component },
  { path: 'Amys-Parents', component: AmyParentsComponent },
  { path: 'Amys-Mom', component: MomComponent },
  { path: 'Amys-Dad', component: DadComponent },
  { path: 'Amys-Twin', component: AmysTwinComponent },
  { path: 'Katie', component: KatieComponent },
  { path: 'Amys-Siblings', component: AmySiblingsComponent },
  { path: 'Timmy', component: TimmyComponent },
  { path: 'Kurt', component: KurtComponent },
  { path: 'Amys-Pets', component: AmysPetsComponent },
  { path: 'Geno', component: GenoComponent },
  { path: 'Snickers', component: SnickersComponent },
  { path: 'Bubbles', component: BubblesComponent },
  { path: 'Ehlers-Danlos', component: EhlersDanlosComponent },
  { path: 'Twins', component: TwinsComponent },
  { path: 'Fill-out-forms', component: FillOutFormComponent },
  { path: 'twosets', component: TwosetsoftwinsComponent },
  { path: 'autism', component: AutismComponent },
  { path: 'SleepApnea', component: SleepApneaComponent },
  { path: 'RBD', component: REMSleepBehaviorDisorderComponent },
  { path: 'HufkerFamily', component: HufkerFamilyComponent },
  { path: 'WillFamily', component: WillFamilyComponent },
  { path: 'Trisomy12p', component: Trisomy12pComponent },
  { path: 'Two-Sets-of-Twins', component: TwoSetsOfTwinsComponent },
  { path: 'BPD', component: BorderlinePersonalityDisorderComponent },
  { path: 'Bipolar', component: BipolarComponent },
  { path: 'Amys-Grandparents', component: AmyGrandparentsComponent },
  { path: 'Madelungs-deformity', component: MadelungsDeformityComponent },
  { path: 'WeilerFamily', component: WeilerFamilyComponent },
  { path: 'Pigs', component: PigsComponent },
  { path: 'Zebras', component: ZebrasComponent },
  { path: 'HAandU', component: HufkerAuntsAndUnclesComponent },
  { path: 'HufkerAunts', component: HufkerAuntsComponent },
  { path: 'Debbie', component: AuntDebbieComponent },
  { path: 'Jo', component: AuntJoComponent },
  { path: 'Linda', component: AuntLindaComponent },
  { path: 'HufkerUncles', component: HufkerUnclesComponent },
  { path: 'Rick', component: UncleRickComponent },
  { path: 'Kenny', component: UncleKennyComponent },
  { path: 'Dan', component: UncleDanComponent },
  { path: 'Jeff', component: UncleJeffComponent },
  { path: 'WillAunts', component: WillAuntsComponent },
  { path: 'Jeannie', component: AuntJeannieComponent },
  { path: 'Kathy', component: AuntKathyComponent },
  { path: 'Nancy', component: AuntNancyComponent },
  { path: 'Mary', component: AuntMaryComponent },
  { path: 'WillUncles', component: WillUnclesComponent },
  { path: 'GodAuntDebbie', component: GodAuntDebbieComponent },
  { path: 'GodAuntMichelle', component: GodAuntMichelleComponent },
  { path: 'Debbie', component: AuntDebbieComponent },
  { path: 'Jeannie', component: AuntJeannieComponent },
  { path: 'Jo', component: AuntJoComponent },
  // { path: '',   redirectTo: '/first-', pathMatch: 'full' }, // redirect to `first-component`
  // { path: 'first-', component: FirstComponent },
  // { path: 'second-', component: SecondComponent },
  // // { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
