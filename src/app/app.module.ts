import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { productComponent } from './product/product.component'
import { ProductsComponent } from './products/products.component'
import { samsungComponent } from './samsung/samsung.component'
import { samsungprodComponent } from './samsungprod/samsungprod.component'
import { nokiacomponent } from './Nokia/nokia.component'
import { NokiaprodComponent } from './Nokiaprod/Nokiaprod.component'
import { LaptopComponent } from './Laptop/Laptop.component'
import { FormsModule } from '@angular/forms';
// import { PostComponent } from './post/post.component';
import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';
import { SkillsetsComponent } from './skillsets/skillsets.component';
import { ChildComponent } from './child/child.component';
import { InputdecoretorComponent } from './inputdecoretor/inputdecoretor.component';
import { TabNgswitchComponent } from './tab-ngswitch/tab-ngswitch.component';
import { OutputDecComponent } from './output-dec/output-dec.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { OutputProdComponent } from './output-prod/output-prod.component';
import { OutputdecexamComponent } from './outputdecexam/outputdecexam.component';
// import { OutputComponent } from './output/output.component';
@NgModule({
  declarations: [
    AppComponent,
    productComponent,
    ProductsComponent,
    samsungComponent,
    samsungprodComponent,
    nokiacomponent,
    NokiaprodComponent,
    LaptopComponent,
    // PostComponent,
    CardComponent,
    TabComponent,
    SkillsetsComponent,
    ChildComponent,
    InputdecoretorComponent,
    TabNgswitchComponent,
    OutputDecComponent,
    OutputDecoratorComponent,
    OutputProdComponent,
    OutputdecexamComponent,
    // OutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
