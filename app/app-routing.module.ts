import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './components/chart/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/chart/pie-chart/pie-chart.component';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './components/table/table.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ExporttableComponent } from './components/exporttable/exporttable.component';
import { ImporttableComponent } from './components/importtable/importtable.component';
import { ImportMattableComponent } from './components/import-mattable/import-mattable.component';
import { InputJsonValidateComponent } from './components/input-json-validate/input-json-validate.component';
import { PdfReaderComponent } from './components/pdf-reader/pdf-reader.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'barchart', component: BarChartComponent },
  { path: 'piechart', component: PieChartComponent },
  { path: 'table', component: TableComponent },
  { path: 'image', component: UploadImageComponent },
  { path: 'pdf-reader', component: PdfReaderComponent },
  { path: 'dropdown', component: DropdownComponent },
  { path: 'export_table', component: ExporttableComponent },
  { path: 'import_table', component: ImporttableComponent },
  { path: 'import_mattable', component: ImportMattableComponent },
  { path: 'jsonvalidate', component: InputJsonValidateComponent },
  // {path: 'nav', component: SidenavComponent,
  // children:[
  //   { path: 'barchart', component: BarChartComponent },
  //   { path: 'piechart', component: PieChartComponent },
  //   { path: 'table', component: TableComponent },
  //   { path: 'image', component: UploadImageComponent },
  //   { path: 'dropdown', component: DropdownComponent },
  //   { path: 'export_table', component: ExporttableComponent },
  //   { path: 'import_table', component: ImporttableComponent },
  //   { path: 'import_mattable', component: ImportMattableComponent },
  // ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
