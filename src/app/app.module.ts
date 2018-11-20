import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { SliderComponent } from './slider/slider.component';
import { MyPipesPipe } from './pipes/my-pipes.pipe';
import { SubstrPipe } from './pipes/substr.pipe';
import { CommonComponent } from './common/common.component';
import { AttrDirective ,} from './directive/attr.directive';
import { AddressinfoComponent } from './addressinfo/addressinfo.component';
import { BlogsComponent } from './blogs/blogs.component';

//define routes
const route : Routes = [
  {path : "" , component : HomeComponent},
  {path : "about" , component : AboutComponent},
  {path : "services" , component : ServicesComponent},
  {path : "portfolio" , component : PortfolioComponent},
  {path : "blogs" , component : BlogsComponent},
  {path : "contact" , component : ContactComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    NewsComponent,
    ContactComponent,
    SliderComponent,
    MyPipesPipe,
    SubstrPipe,
    CommonComponent,
    AttrDirective,
    AddressinfoComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
