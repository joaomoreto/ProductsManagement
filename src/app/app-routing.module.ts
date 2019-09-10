import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { EditorProductComponent } from './pages/editor-product/editor-product.component';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { ManagerGuard } from './guards/manager.guard';
import { MasterComponent } from './pages/master/master.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';


const routes: Routes = [
  // { path: 'login/:par', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editor-product', component: EditorProductComponent },
  {
    path: '',
    canActivate: [AuthenticatedGuard],
    component: MasterComponent,
    children: [
      { path: '', component: ProductListComponent },
    ]
  },
  {
    path: '',
    canActivate: [AuthenticatedGuard],
    component: MasterComponent,
    children: [
      { path: 'create-product', component: CreateProductComponent },
    ]
  },
  {
    path: '',
    canActivate: [AuthenticatedGuard, ManagerGuard],
    component: MasterComponent,
    children: [
      { path: 'edit-product/:code', component: EditProductComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
