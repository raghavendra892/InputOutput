import { Component, OnInit } from "@angular/core"
import { Validators } from "@angular/forms";

@Component({
    selector : "app-products",
    // selector : "[app-products]",
    // selector : ".app-products",
    templateUrl : "./products.component.html",
    styleUrls : ["./products.component.scss"]
})
export class ProductsComponent implements OnInit{
    isDisbled : boolean = true;
    productsStatus : string = "No of product is added yet";
    noOfproduct : number = 0;
    searchproductName : String = "No of product is Search yet";
    
    constructor(){
    
    }
    ngOnInit(): void {
        console.log(`Product component is init`)
        setTimeout(()=>{
            this.isDisbled = false
        },800)
    }

    onkeyup(eve:Event){
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
        this.searchproductName = val;
    }

    getProductStatus(){
        this.noOfproduct++;
        this.productsStatus = `${this.noOfproduct} Product is added to cart`
        
    }

    onProductReamove(){
      if(this.noOfproduct > 0){
        this.noOfproduct--;
        this.productsStatus =  `${this.noOfproduct} Product remove from the cart`
      }
    }

    public getBgColor(){
        return "Orange"
    }
}













//(((((1,2))))) export class ProductsComponent implements OnInit{
//     isDisbled : boolean = true;
//     productsStatus : string = "No of product is added yet";
//     noOfproduct : number = 0;
//     constructor(){

//     }
//     ngOnInit(): void {
//         console.log(`Product component is init`)
//         setTimeout(()=>{
//             this.isDisbled = false
//         },800)
//     }

//     onkeyup(eve:Event){
//         let val = (eve.target as HTMLInputElement).value
//         console.log(val)
//     }

//     getProductStatus(){
//         this.noOfproduct++;
//         this.productsStatus = `${this.noOfproduct} Product is added to cart`
//     }
// }




