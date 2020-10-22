import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/Rx';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    todosCollection: any;
    todos: any;

    constructor(private db: AngularFireDatabase) { }


    saveProduct(product) {
        return this.db.list('/products').push(product)
    }

    getAll() {
        return this.db.list('/products');
    }

    getParticularProduct(productId) {
        return this.db.object('/products/' + productId);
    }

    updateProduct(productId,product){
        return this.db.object('/products/' + productId).update(product);
    }

    deleteProduct(productId){
        return this.db.object('/products/' + productId).remove();
 
    }
}
