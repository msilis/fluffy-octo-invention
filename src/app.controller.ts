import { Controller, Get } from '@nestjs/common';
import { dogType, dogBreeds } from './assets/dogBreeds';

@Controller()
export class AppController {
  @Get()
  greetUser(): string {
    return "You've made it to the dogBreed backend";
  }

  @Get('allDogs')
  getAllDogs(): dogType[] {
    return dogBreeds.map((dog) => ({
      id: dog.id,
      name: dog.name,
      bio: dog.bio,
    }));
  }
}
