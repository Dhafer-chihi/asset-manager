import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path : 'login' , component : LoginComponent},
    {path : 'home' , component: HomeComponent , children:[
        {path : 'user' , loadChildren:()=>import('./pages/user/user-routing.module').then(m=>m.UserRoutingModule)},
        {path : 'client', loadChildren:()=>import('./pages/client/client-routing.module').then(m=>m.ClientRoutingModule)},
        {path : 'produit', loadChildren:()=>import('./pages/produit/produit-routing.module').then(m=>m.ProduitRoutingModule)},
        {path : 'stock' , loadChildren:()=>import('./pages/stock/stock-routing.module').then(m=>m.StockRoutingModule)},
        {path : 'dashboard' , loadChildren:()=>import('./pages/dashboard/dashboard-routing.module').then(m=>m.DashboardRoutingModule)},
        {path : 'etat' , loadChildren:()=>import('./pages/etat/etat-routing.module').then(m=>m.EtatRoutingModule)}
    ]},
];

