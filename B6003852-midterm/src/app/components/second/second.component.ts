import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    detail: new FormControl(),
    quanrity: new FormControl(),
    price: new FormControl(),
    Type: new FormArray([
      new FormControl('')
    ])
  });

  productType: string[] = ['','CPU','RAM','HDD','Mainboard'];

  constructor(private cartService:CartService) { }

  get Type(){
    return this.productForm.get(this.productType) as FormArray;
  }
  ngOnInit(): void {
  }
 addProduct(){
  // this.cartService.add(this.productForm);
 }
}
