import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
import {MaterialModule} from "./module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommentComponent} from "./comment/comment.component";

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
