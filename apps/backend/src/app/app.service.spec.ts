import { Test } from '@nestjs/testing';
import moment from 'moment';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('getData', () => {
    const currentDate = moment();
    const currentDateFormatted = currentDate.format(
      'MMMM D, YYYY [at] h:mm:ss A'
    );
    it('should return "Backend is running!🛸 - Pinged ${MMMM D, YYYY [at] h:mm:ss A}🏓"', () => {
      expect(service.getData()).toEqual({
        message: `Backend is running!🛸 - Pinged ${currentDateFormatted}🏓`,
      });
    });
  });
});
