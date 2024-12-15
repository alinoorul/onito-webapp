import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './helpers/auth.interceptor';





import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderItemComponent } from './components/header-item/header-item.component';
import { ContainerComponent } from './components/container/container.component';
import { ButtonComponent } from './components/button/button.component';
import { PredictComponent } from './pages/predict/predict.component';
import { AddReportsComponent } from './pages/add-reports/add-reports.component';
import { ModelsComponent } from './pages/models/models.component';
import { PredictItemComponent } from './components/predict-item/predict-item.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes: Routes = [
  {path: 'home', component: ContainerComponent},
  {path: 'predict', component: PredictComponent},
  {path: 'add-reports', component: AddReportsComponent},
  {path: 'models', component: ModelsComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderItemComponent,
    ContainerComponent,
    ButtonComponent,
    PredictComponent,
    AddReportsComponent,
    ModelsComponent,
    PredictItemComponent,
    FileUploadComponent,
    RegisterComponent,
    UserProfileComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes, { enableTracing: true }), NgxExtendedPdfViewerModule, HttpClientModule, FormsModule  
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
