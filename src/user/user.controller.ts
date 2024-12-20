import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/mains')
  async getMainPage() {
    return this.userService.getMainPage();
  }

  @Get('/products')
  async getProduct() {
    return this.userService.getProduct();
  }
}
