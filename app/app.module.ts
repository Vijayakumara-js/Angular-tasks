import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import module
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import {MatIconModule} from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { PdfViewerModule } from 'ng2-pdf-viewer';

// Created Component

import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TopnavComponent } from './navigation/topnav/topnav.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { RegisterComponent } from './register/register.component';
import { BarChartComponent } from './components/chart/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/chart/pie-chart/pie-chart.component';
import { TableComponent } from './components/table/table.component';
import { InterceptorService } from './services/interceptor/interceptor.service';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ExporttableComponent } from './components/exporttable/exporttable.component';
import { ImporttableComponent } from './components/importtable/importtable.component';
import { ImportMattableComponent } from './components/import-mattable/import-mattable.component';
import { InputEditorFormComponent } from './components/input-editor-form/input-editor-form.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { InputJsonValidateComponent } from './components/input-json-validate/input-json-validate.component';
import { PdfReaderComponent } from './components/pdf-reader/pdf-reader.component';
import { LifeCycleHooksComponent } from './components/life-cycle-hooks/life-cycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    TopnavComponent,
    SidenavComponent,
    RegisterComponent,
    BarChartComponent,
    PieChartComponent,
    TableComponent,
    UploadImageComponent,
    DropdownComponent,
    ExporttableComponent,
    ImporttableComponent,
    ImportMattableComponent,
    InputEditorFormComponent,
    GoogleMapComponent,
    InputJsonValidateComponent,
    PdfReaderComponent,
    LifeCycleHooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    NgChartsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    PdfViewerModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : InterceptorService,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
