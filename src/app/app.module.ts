import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EditorProductComponent } from './pages/editor-product/editor-product.component';
import { MaskDirective } from './directives/mask.directive';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './pages/master/master.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { ManagerGuard } from './guards/manager.guard';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    EditorProductComponent,
    MaskDirective,
    LoadingComponent,
    LoginComponent,
    MasterComponent,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthenticatedGuard,
    ManagerGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
