import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './pages/directory/directory.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: '', component: DirectoryComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
