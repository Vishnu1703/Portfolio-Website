import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./component/home-page/home-page.component";
import { ExperienceDetailsComponent } from "./component/experience-details/experience-details.component";
import { ProfileDetailsComponent } from "./component/profile-details/profile-details.component";
import { GetInTouchComponent } from "./component/get-in-touch/get-in-touch.component";
import { AboutMeComponent } from "./component/about-me/about-me.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ExperienceDetailsComponent,
    ProfileDetailsComponent,
    GetInTouchComponent,
    AboutMeComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [
    ProfileDetailsComponent,
    ExperienceDetailsComponent,
    GetInTouchComponent,
    AboutMeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
