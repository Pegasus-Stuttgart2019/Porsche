import { Component, OnInit } from '@angular/core';

import { products } from '../products';
import { products2 } from '../products2';
import { ApiService } from '../api.service';

import { Observable } from '../../../node_modules/rxjs';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    products = products;
    products2 = products2;
    articles;
    interval;

    constructor(private apiService: ApiService) { }

    /*
    ngOnInit() {
      console.log('on init');
      this.apiService.getNews().subscribe((data)=>{
        console.log(data);
        this.articles = data[0]['articles'];
        console.log(this.articles);
      });
    }
    */

    ngOnInit() {
        this.updateData();

        this.refreshData();
        this.interval = setInterval(() => {
            this.refreshData();
            console.log(this.articles);
        }, 2000);
    }

    updateData() {
        this.apiService.getNews().subscribe((data) => {
            console.log(data);
            this.articles = data['data'];

        });
    }

    refreshData() {
        this.updateData(); // simply signal for the service to update its data stream
    }

    share() {
        window.alert('The product has been shared!');
    }
}




/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
