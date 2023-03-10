import { Controller, Get } from '@nestjs/common';
import { Public } from '../common/decorators';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get()
  getData() {
    return this.appService.getData();
  }

  @Public()
  @Get('/api')
  getDataWithPrefix() {
    return this.appService.getData();
  }
}
