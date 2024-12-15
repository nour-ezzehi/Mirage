import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildTestComponent } from './child-test/child-test.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
  { path: 'parent', loadChildren: () => import('./parent/parent.module').then(m => m.ParentModule) },
  { path: 'child-test', component: ChildTestComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }, // Route pour le composant login
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection vers /login par défaut
  { path: '**', redirectTo: '/login' }, // Gestion des routes non trouvées
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
