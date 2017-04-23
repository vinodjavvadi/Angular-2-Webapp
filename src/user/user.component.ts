import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../model/post';
import { Address } from '../model/address';

@Component({
  moduleId : module.id,
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [PostsService]
})
export class UserComponent {

    title:string;
    name:string;
    emailID:string;
    address: Address;
    hobbies: string[];
    showHobbies : boolean;
    posts: Post[];
  
  constructor(private postsService: PostsService){
      console.log("Constructor ran");
      this.title = 'This is my first app in angular2';
      this.name = 'Vinod Javvadi';
      this.emailID = 'vinod.javvadi@gmail.com';
      this.address =  new Address('12 Main St','Boston','MA');
      this.hobbies = ['Music','Movies','Sports'];
      this.showHobbies = false;
      
      this.postsService.getPosts().subscribe(posts => {
          //console.log(posts);
          this.posts = posts;
      },
      err => {
          // Log errors if any
          console.log(err);
      }
      );
      

  }
  
  toggleHobbies()
  {
     if(this.showHobbies == true)
         this.showHobbies = false;
     else
         this.showHobbies = true;        
  }
  
  addHobby(hobby)
  {
      //console.log(hobby);
      this.hobbies.push(hobby);
  }
  
  deleteHobby(i)
  {
      this.hobbies.splice(i,1);
  }
}






