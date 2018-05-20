import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from "./app.component";
import { ProductComponent } from "./products/product.component";
import { ProductService } from "./products/product.service";

@NgModule({
    //all the module will comw
    imports:[
        BrowserModule,
        FormsModule
    ],
    //all the component will be in come here
    declarations:[
        AppComponent,
        ProductComponent
    ],
    //Main or first component will be in bootstrap array
    bootstrap:[
        AppComponent
    ],
    providers:[
        ProductService
    ]
})

export class AppModule{}