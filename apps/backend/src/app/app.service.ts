import { Injectable } from '@nestjs/common';
import moment from 'moment';

@Injectable()
export class AppService {
  getData(): { message: string } {
    const currentDate = moment();
    const currentDateFormatted = currentDate.format(
      'MMMM D, YYYY [at] h:mm:ss A'
    );

    return {
      message: `Backend is running!🛸 - Pinged ${currentDateFormatted}🏓`,
    };
  }
}
