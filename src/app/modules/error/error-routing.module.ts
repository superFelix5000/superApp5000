import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

const routes: Routes = [
    {
        path: '',
        component: ErrorpageComponent,
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class ErrorRoutingModule {}
