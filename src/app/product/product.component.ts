import { Component, OnInit } from "@angular/core";

@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ["./product.component.scss"]
})
export class productComponent implements OnInit {
    pName : string = "Samsung S23 ultra";
    pId : number = 123;
    pStatus : string = "in transition";
    isDisbled : boolean = true;
    isProductAvailable !: boolean;
    constructor(){

    }
    ngOnInit(): void {
        console.log(`Product component is init`)
        // setTimeout(()=>{
        //     this.isDisbled = false
        // },3000)

        this.isProductAvailable = Math.random() >= .5 ? true : false
    }

    getproduct(){
        return this.pId
    }
    getBgColor(){
        // if(this.isProductAvailable){
        //     return "orange"
        // }else{
        //     return "#ccc"
        // }
        return this.isProductAvailable ? "orange" : "#ccc"
    }
}