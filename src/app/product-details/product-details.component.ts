import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  priduct: Product | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productOdFromRoute = Number(routeParams.get('productId'));
  }
}
