import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // console.log('process.env.DATABASE_URL', process.env.DATABASE_URL);
    return this.appService.getHello();
  }
}
