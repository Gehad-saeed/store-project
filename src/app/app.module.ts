import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EgyptTrapsComponent } from './egypt-traps/egypt-traps.component';
import { SaudiArabiaTrapsComponent } from './saudi-arabia-traps/saudi-arabia-traps.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TrapManagementComponent } from './trap-management/trap-management.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChartComponent } from './chart/chart.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MapComponent } from './map/map.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthInterceptor } from './auth.interceptor';
import { ExportAsModule } from 'ngx-export-as';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EgyptTrapsComponent,
    SaudiArabiaTrapsComponent,
    SideBarComponent,
    TrapManagementComponent,
    UsersComponent,
    NotFoundComponent,
    ChartComponent,
    MapComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB2eurcaSYpxe7oJ0DwpDb_MnQtJqe2WiY'
    }),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ExportAsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
