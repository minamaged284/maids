import { Pipe, PipeTransform } from '@angular/core';
import { User } from './Interfaces/user';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users:User[],userInput:string):User[] {
    return users.filter((par)=>par.id==(userInput));
  }

}
