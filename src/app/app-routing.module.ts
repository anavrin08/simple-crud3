import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog/pages/blog-list/blog-list.component';
import { BookListComponent } from './book/pages/book-list/book-list.component';
import { BlogFormComponent } from './modules/blog/pages/blog-form/blog-form.component';
import { BookFormComponent } from './modules/book/pages/book-form/book-form.component';
import { ProfileComponent } from './user/pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  },

  {
    path: 'book',
    component: BookListComponent,
    loadChildren: () => import('./book/book.module').then(m =>m.BookModule)
  },

  {
    path: 'blog',
    component: BlogListComponent,
    loadChildren: () => import('./blog/blog.module').then(m =>m.BlogModule)
  },

  {
    path: 'profile',
    component: ProfileComponent,
    loadChildren: () => import('./user/user.module').then(m =>m.UserModule)
  },

  {
    path: 'book/form',
    component: BookFormComponent
  },

  {
    path: 'blog/form',
    component: BlogFormComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
