import { Routes } from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { StartComponent } from './start/start.component';
import { RejectionComponent } from './rejection/rejection.component';

export const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'success', component: SuccessComponent},
    {path: 'date-rejected', component: RejectionComponent}
];
