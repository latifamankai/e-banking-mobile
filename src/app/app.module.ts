import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {LoginPage} from './login/login.page';
import {BlankComponent} from './shared/layouts/blank/blank.component';
import {BreadcrumbComponent} from './shared/layouts/breadcrumb/breadcrumb.component';
import {FullComponent} from './shared/layouts/full/full.component';
import {NavigationComponent} from './shared/layouts/header-navigation/navigation.component';
import {SidebarComponent} from './shared/layouts/sidebar/sidebar.component';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {JwtInterceptorService} from './shared/services/jwt-interceptor.service';
import {ComptePage} from './compte/compte.page';
import {CoursChangePage} from './cours-change/cours-change.page';
import {OperationPage} from './compte/operation/operation.page';
import {ChequierPage} from './demande/chequier/chequier.page';
import {LivretPage} from './demande/livret/livret.page';
import {CartePage} from './demande/carte/carte.page';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [AppComponent,
    BlankComponent,
    BreadcrumbComponent,
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    LoginPage,
    ChangePasswordComponent,
    ComptePage,
    CoursChangePage,
    OperationPage,
    ChequierPage,
    LivretPage,
    CartePage],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    PerfectScrollbarModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},

  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
