import { Routes } from '@angular/router';
import { CadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaExtratoComponent } from './tela-extrato/tela-extrato.component';
import { LoginComponent } from './login/login.component';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaPixComponent } from './tela-pix/tela-pix.component';
import { InvestimentosComponent } from './tela-investimento/tela-investimento.component';
;



export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'tela-inicial', component: TelaInicialComponent},
    { path: 'tela-cadastro', component: CadastroComponent},
    { path: 'tela-extrato', component: TelaExtratoComponent},
    { path: 'tela-pix', component: TelaPixComponent},
    { path: 'tela-investir', component: InvestimentosComponent },
    {path: 'tela-login', component: LoginComponent}
];

