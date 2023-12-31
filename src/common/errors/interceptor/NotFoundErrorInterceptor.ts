import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  NotAcceptableException,
} from '@nestjs/common';
import { Observable, catchError } from 'rxjs';
import { NotFoundError } from '../type/NotFoundError';

@Injectable()
export class NotFoundErrorInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof NotFoundError) {
          throw new NotAcceptableException(error.message);
        } else {
          throw error;
        }
      }),
    );
  }
}
