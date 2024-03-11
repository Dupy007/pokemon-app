import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: PokemonListComponent , canActivate: [AuthGuard]},
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
