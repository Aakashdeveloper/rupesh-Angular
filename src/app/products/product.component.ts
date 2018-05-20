import {Component} from '@angular/core';
import {ProductService} from './product.service'

@Component({
    selector:'app-product',
    templateUrl:'./product.component.html'
})

export class ProductComponent{

    title='Product List @@@@';
    showTable=true;
    showImage=false;
    textType="rupesh"
    products:any[];

    constructor(private _productService:ProductService){}

    onImage():void{
        this.showImage = !this.showImage
    }

    ngOnInit():void{
        this.products = this._productService.getProducts();
    }
}


/*
one way
two way
*/
