import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { ProductComponent } from "./products/product.component";

@NgModule({
    //all the module will comw
    imports:[
        BrowserModule
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
    providers:[]
})

export class AppModule{}