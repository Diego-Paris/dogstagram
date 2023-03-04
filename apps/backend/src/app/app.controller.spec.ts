import { Test } from '@nestjs/testing';

import { AppModule } from './app.module';
import request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('AppController', () => {
  let app: INestApplication;
  let server: unknown;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    server = app.getHttpServer(); // get the HTTP server instance
  });

  describe('getData', () => {
    it('should return 200 status code for GET /', () => {
      return request(server).get('/').expect(200);
    });
  });
});
