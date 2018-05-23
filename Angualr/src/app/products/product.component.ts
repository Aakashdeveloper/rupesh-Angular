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
    errorMessage;

    constructor(private _productService:ProductService){}

    onImage():void{
        this.showImage = !this.showImage
    }

    ngOnInit():void{
        this._productService.getProducts()
        .subscribe((data)=>this.products=data,
                (error)=>this.errorMessage=error)
    }
}


/*
one way
two way
*/
