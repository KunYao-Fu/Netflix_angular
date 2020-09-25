import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ErrorComponent } from './pages/error/error.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseModule } from './modules/firebase/firebase.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ErrorComponent,
    LayoutComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [
    HttpClientModule,
    FirebaseModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
