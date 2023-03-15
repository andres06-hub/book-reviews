import {
  createParamDecorator,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { IJwtPayload } from '../interfaces/data-auth';

export const Auth = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): Partial<IJwtPayload> => {
    try {
      const request = ctx.switchToHttp().getRequest();
      console.log('Request: ', data);
      return request.user;
    } catch (error) {
      throw new ForbiddenException();
    }
  },
);
