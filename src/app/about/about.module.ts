import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';

const ROUTES: Routes = [
    {path: '', component: AboutComponent}
]

@NgModule({
    declarations: [AboutComponent],
    imports: [RouterModule, RouterModule.forChild(ROUTES)]
})
export class AboutModule {}