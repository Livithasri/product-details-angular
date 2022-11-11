import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';  



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  
{   
  title(title:any){
    throw new Error('Method not implemented');
  }
   products:any[]=[];  
   productService;   
   constructor(){  
     this.productService=new ProductService();  
   }   
   getProducts() {       
     this.products=this.productService.getProducts();  
     
   }    
}   


