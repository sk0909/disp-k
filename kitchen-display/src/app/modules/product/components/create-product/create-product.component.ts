import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm:FormGroup;
  products:any;
  constructor(private productService:ProductService,private fb_Group:FormBuilder) { }

  ngOnInit() {
    this.productFormCreate();
  }

  createProduct():void{
   console.log(this.productForm)
    this.productService.addProduct(this.productForm.value).subscribe((res:any)=>{
       if(res.status) {alert('Product Created Successfully');this.productForm.reset()}
       else alert(res.message)
    })
  }

  private productFormCreate():FormGroup
  {
    return (this.productForm = this.fb_Group.group({
      name: ['', [Validators.required]],
      description: [''],
    }))
  }

}
