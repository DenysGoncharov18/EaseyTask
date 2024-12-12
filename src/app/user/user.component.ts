                                                  // import { Component, computed, signal } from '@angular/core';

                                                  //import { DUMMY_USERS } from '../dummy_users';
                                                  //const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
import { Component , Input, Output, EventEmitter, output} from '@angular/core';

// type User = {
//   id:string;
//   avatar:string;
//   name: string;
// };

import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,

  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
                                                // selectedUser = signal(DUMMY_USERS[randomIndex]);
                                                // imagePath = computed(()=>'../../assets/users/'+ this.selectedUser().avatar);
                                                // get imagePath (){
                                                //   return '../../assets/users/'+ this.selectedUser.avatar
                                                // }

                                                // @Input ({required:true})id!:string;
                                                // @Input({required:true}) avatar!:string;
                                                // @Input({required:true}) name!: string;
@Input({required:true}) user!:User;
@Input({required: true}) selected!: boolean;
@Output() select = new EventEmitter<string>();

                                                //select = output<string>();
                                                //   avatar = input.required<string>();
                                                //   name = input.required<string>();


                                                // imagePath = computed(()=>{
                                                //   return 'asset/users/'+ this.avatar();
                                                // });
get imagePath(){
    return 'asset/users/'+ this.user.avatar;
}

  onSelectUser(){

    this.select.emit(this.user.id);
    console.log('User component Clicked!');
                                                // const randomIndex = Math.floor(Math.random()*DUMMY_USERS.length);
                                                // this.selectedUser.set(DUMMY_USERS[randomIndex]);

  }
}
