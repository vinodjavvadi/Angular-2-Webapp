import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Post } from '../model/post';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostsService{
    constructor(private http : Http){
        console.log('PostService Initialized ...');
    }
    
    private postsUrl  = 'https://jsonplaceholder.typicode.com/posts';
    
    getPosts() : Observable<Post[]>{
        return this.http.get(this.postsUrl)
                    // ...and calling .json() on the response to return data
                    .map((res:Response) => <Post[]> res.json())
                    //...errors if any
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
                    
    }
}