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
    TwosetsoftwinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
