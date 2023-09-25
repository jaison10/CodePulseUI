import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopNavComponent } from './layouts/top-nav/top-nav.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BlogListComponent } from './features/blog/blog-list/blog-list.component';
import { AddEditBlogComponent } from './features/blog/add-edit-blog/add-edit-blog.component';

import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    CategoryListComponent,
    AddCategoryComponent,
    BlogListComponent,
    AddEditBlogComponent
  ],
  imports: [
    MarkdownModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    // MatFormFieldModule,
    // MatAutocompleteModule,
    // MatCheckboxModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatMenuModule,
    // MatSidenavModule,
    // MatToolbarModule,
    // MatCardModule,
    // MatDividerModule,
    // MatExpansionModule,
    // MatGridListModule,
    // MatListModule,
    // MatStepperModule,
    // MatTabsModule,
    // MatTreeModule,
    // MatButtonModule,
    // MatButtonToggleModule,
    // MatBadgeModule,
    // MatChipsModule,
    // MatIconModule,
    // MatProgressSpinnerModule,
    // MatProgressBarModule,
    // MatRippleModule,
    // MatBottomSheetModule,
    // MatDialogModule,
    // MatSnackBarModule,
    // MatTooltipModule,
    // MatPaginatorModule,
    // MatSortModule,
    // MatTableModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
