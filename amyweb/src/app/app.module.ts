import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EhlersDanlosComponent } from './ehlers-danlos/ehlers-danlos.component';
import { AutismComponent } from './autism/autism.component';
import { Trisomy12pComponent } from './trisomy12p/trisomy12p.component';
import { BorderlinePersonalityDisorderComponent } from './borderline-personality-disorder/borderline-personality-disorder.component';
import { BipolarComponent } from './bipolar/bipolar.component';
import { SleepApneaComponent } from './sleep-apnea/sleep-apnea.component';
import { REMSleepBehaviorDisorderComponent } from './remsleep-behavior-disorder/remsleep-behavior-disorder.component';
import { TwinsComponent } from './twins/twins.component';
import { MadelungsDeformityComponent } from './madelungs-deformity/madelungs-deformity.component';
import { AmyElizabethRoseHufkerComponent } from './amy-elizabeth-rose-hufker/amy-elizabeth-rose-hufker.component';
import { HufkerFamilyComponent } from './hufker-family/hufker-family.component';
import { Hufker6Component } from './hufker6/hufker6.component';
import { WillFamilyComponent } from './will-family/will-family.component';
import { AmyGrandparentsComponent } from './amy-grandparents/amy-grandparents.component';
import { WeilerFamilyComponent } from './weiler-family/weiler-family.component';
import { AmyParentsComponent } from './amy-parents/amy-parents.component';
import { TwoSetsOfTwinsComponent } from './two-sets-of-twins/two-sets-of-twins.component';
import { TwosetsoftwinsComponent } from './twosetsoftwins/twosetsoftwins.component';
import { AmySiblingsComponent } from './amy-siblings/amy-siblings.component';
import { AmysTwinComponent } from './amys-twin/amys-twin.component';
import { KatieComponent } from './katie/katie.component';
import { TimmyComponent } from './timmy/timmy.component';
import { KurtComponent } from './kurt/kurt.component';
import { DadComponent } from './dad/dad.component';
import { MomComponent } from './mom/mom.component';
import { AmysPetsComponent } from './amys-pets/amys-pets.component';
import { GenoComponent } from './geno/geno.component';
import { BennyComponent } from './benny/benny.component';
import { BubblesComponent } from './bubbles/bubbles.component';
import { SnickersComponent } from './snickers/snickers.component';
import { PigsComponent } from './pigs/pigs.component';
import { ZebrasComponent } from './zebras/zebras.component';
import { TwinsSetAComponent } from './twins-set-a/twins-set-a.component';
import { TwinsSetBComponent } from './twins-set-b/twins-set-b.component';
import { HufkerGrandparentsComponent } from './hufker-grandparents/hufker-grandparents.component';
import { GrandmaHufkerComponent } from './grandma-hufker/grandma-hufker.component';
import { GrandpaHufkerComponent } from './grandpa-hufker/grandpa-hufker.component';
import { WillGrandparentsComponent } from './will-grandparents/will-grandparents.component';
import { GrandmaWillComponent } from './grandma-will/grandma-will.component';
import { GrandpaWillComponent } from './grandpa-will/grandpa-will.component';
import { GodGrandparentsComponent } from './god-grandparents/god-grandparents.component';
import { GodGrandmaLesinskiComponent } from './god-grandma-lesinski/god-grandma-lesinski.component';
import { GodGrandpaLesinskiComponent } from './god-grandpa-lesinski/god-grandpa-lesinski.component';
import { AuntsAndUnclesComponent } from './aunts-and-uncles/aunts-and-uncles.component';
import { HufkerAuntsAndUnclesComponent } from './hufker-aunts-and-uncles/hufker-aunts-and-uncles.component';
import { HufkerAuntsComponent } from './hufker-aunts/hufker-aunts.component';
import { AuntDebbieComponent } from './aunt-debbie/aunt-debbie.component';
import { AuntLindaComponent } from './aunt-linda/aunt-linda.component';
import { AuntJoComponent } from './aunt-jo/aunt-jo.component';
import { HufkerUnclesComponent } from './hufker-uncles/hufker-uncles.component';
import { UncleRickComponent } from './uncle-rick/uncle-rick.component';
import { UncleKennyComponent } from './uncle-kenny/uncle-kenny.component';
import { UncleJeffComponent } from './uncle-jeff/uncle-jeff.component';
import { UncleDanComponent } from './uncle-dan/uncle-dan.component';
import { WillAuntsAndUnclesComponent } from './will-aunts-and-uncles/will-aunts-and-uncles.component';
import { WillAuntsComponent } from './will-aunts/will-aunts.component';
import { AuntKathyComponent } from './aunt-kathy/aunt-kathy.component';
import { AuntNancyComponent } from './aunt-nancy/aunt-nancy.component';
import { AuntMaryComponent } from './aunt-mary/aunt-mary.component';
import { AuntJeannieComponent } from './aunt-jeannie/aunt-jeannie.component';
import { AuntRoseComponent } from './aunt-rose/aunt-rose.component';
import { WillUnclesComponent } from './will-uncles/will-uncles.component';
import { UncleCarlComponent } from './uncle-carl/uncle-carl.component';
import { UncleKurtComponent } from './uncle-kurt/uncle-kurt.component';
import { UncleDaleComponent } from './uncle-dale/uncle-dale.component';
import { UncleDennyComponent } from './uncle-denny/uncle-denny.component';
import { GodAuntsAndUnclesComponent } from './god-aunts-and-uncles/god-aunts-and-uncles.component';
import { GodAuntsComponent } from './god-aunts/god-aunts.component';
import { GodAuntDebbieComponent } from './god-aunt-debbie/god-aunt-debbie.component';
import { GodAuntMichelleComponent } from './god-aunt-michelle/god-aunt-michelle.component';
import { GodUnclesComponent } from './god-uncles/god-uncles.component';
import { GodUncleDeanComponent } from './god-uncle-dean/god-uncle-dean.component';
import { GodUncleTomComponent } from './god-uncle-tom/god-uncle-tom.component';
import { AmysDiagnosesComponent } from './amys-diagnoses/amys-diagnoses.component';
import { AmysPrimaryDiagnosesComponent } from './amys-primary-diagnoses/amys-primary-diagnoses.component';
import { AmysPhysicalDiagnosesComponent } from './amys-physical-diagnoses/amys-physical-diagnoses.component';
import { AmysMentalHealthDiagnosesComponent } from './amys-mental-health-diagnoses/amys-mental-health-diagnoses.component';
import { AmysDevelopmentalDiagnosesComponent } from './amys-developmental-diagnoses/amys-developmental-diagnoses.component';
import { AmysBehavioralHealthDiagnosesComponent } from './amys-behavioral-health-diagnoses/amys-behavioral-health-diagnoses.component';
import { AmysGeneticDiagnosesComponent } from './amys-genetic-diagnoses/amys-genetic-diagnoses.component';
import { AmysSurgeriesComponent } from './amys-surgeries/amys-surgeries.component';
import { AmysInjuriesComponent } from './amys-injuries/amys-injuries.component';
import { AmysAcuteDiagnosesComponent } from './amys-acute-diagnoses/amys-acute-diagnoses.component';
import { HenochSchonleinPurpuraComponent } from './henoch-schonlein-purpura/henoch-schonlein-purpura.component';
import { HenochschonleinpurpuraComponent } from './henochschonleinpurpura/henochschonleinpurpura.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { FormsComponent } from './forms/forms.component';
import { FillOutFormComponent } from './fill-out-form/fill-out-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EhlersDanlosComponent,
    AutismComponent,
    Trisomy12pComponent,
    BorderlinePersonalityDisorderComponent,
    BipolarComponent,
    SleepApneaComponent,
    REMSleepBehaviorDisorderComponent,
    TwinsComponent,
    MadelungsDeformityComponent,
    AmyElizabethRoseHufkerComponent,
    HufkerFamilyComponent,
    Hufker6Component,
    WillFamilyComponent,
    AmyGrandparentsComponent,
    WeilerFamilyComponent,
    AmyParentsComponent,
    TwoSetsOfTwinsComponent,
    TwosetsoftwinsComponent,
    AmySiblingsComponent,
    AmysTwinComponent,
    KatieComponent,
    TimmyComponent,
    KurtComponent,
    DadComponent,
    MomComponent,
    AmysPetsComponent,
    GenoComponent,
    BennyComponent,
    BubblesComponent,
    SnickersComponent,
    PigsComponent,
    ZebrasComponent,
    TwinsSetAComponent,
    TwinsSetBComponent,
    HufkerGrandparentsComponent,
    GrandmaHufkerComponent,
    GrandpaHufkerComponent,
    WillGrandparentsComponent,
    GrandmaWillComponent,
    GrandpaWillComponent,
    GodGrandparentsComponent,
    GodGrandmaLesinskiComponent,
    GodGrandpaLesinskiComponent,
    AuntsAndUnclesComponent,
    HufkerAuntsAndUnclesComponent,
    HufkerAuntsComponent,
    AuntDebbieComponent,
    AuntLindaComponent,
    AuntJoComponent,
    HufkerUnclesComponent,
    UncleRickComponent,
    UncleKennyComponent,
    UncleJeffComponent,
    UncleDanComponent,
    WillAuntsAndUnclesComponent,
    WillAuntsComponent,
    AuntKathyComponent,
    AuntNancyComponent,
    AuntMaryComponent,
    AuntJeannieComponent,
    AuntRoseComponent,
    WillUnclesComponent,
    UncleCarlComponent,
    UncleKurtComponent,
    UncleDaleComponent,
    UncleDennyComponent,
    GodAuntsAndUnclesComponent,
    GodAuntsComponent,
    GodAuntDebbieComponent,
    GodAuntMichelleComponent,
    GodUnclesComponent,
    GodUncleDeanComponent,
    GodUncleTomComponent,
    AmysDiagnosesComponent,
    AmysPrimaryDiagnosesComponent,
    AmysPhysicalDiagnosesComponent,
    AmysMentalHealthDiagnosesComponent,
    AmysDevelopmentalDiagnosesComponent,
    AmysBehavioralHealthDiagnosesComponent,
    AmysGeneticDiagnosesComponent,
    AmysSurgeriesComponent,
    AmysInjuriesComponent,
    AmysAcuteDiagnosesComponent,
    HenochSchonleinPurpuraComponent,
    HenochschonleinpurpuraComponent,
    SignUpComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    FormsComponent,
    FillOutFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
