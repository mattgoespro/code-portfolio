import { ApiHttpErrorResponse } from '../../shared/services/shared.model';
import { AxiosError } from 'axios';
import { Subject } from 'rxjs/internal/Subject';

export interface ErrorNotification {
  httpErrorCode: number;
  message: string;
}

class ErrorNotificationService {
  private notifications: ErrorNotification[] = [];
  public notify: Subject<ErrorNotification[]> = new Subject();

  public log(error: ApiHttpErrorResponse | AxiosError) {
    let axiosError: AxiosError;
    let apiError: ApiHttpErrorResponse;

    if (error instanceof AxiosError) {
      axiosError = error;
    } else {
      apiError = error;
    }

    const notification: ErrorNotification = {
      httpErrorCode: axiosError != null ? +axiosError.response.status : apiError.httpErrorCode,
      message: this.parseErrorResponseMessage(error)
    };

    if (
      this.notifications.find(
        (n) => n.httpErrorCode === notification.httpErrorCode && n.message === notification.message
      ) == null
    ) {
      this.notifications.push(notification);
      this.notify.next(this.notifications);
    }
  }

  private parseErrorResponseMessage(error: ApiHttpErrorResponse | AxiosError) {
    let axiosError: AxiosError;
    let apiError: ApiHttpErrorResponse;

    if (error instanceof AxiosError) {
      axiosError = error;
    } else {
      apiError = error;
    }

    const statusCode: number =
      apiError != null ? apiError.httpErrorCode : +axiosError.response.status;

    if (statusCode === 504 || statusCode === 401 || statusCode === 403) {
      return 'An unexpected error has occurred. Please try again.';
    }

    return error.message;
  }

  public getNotifications() {
    return this.notifications;
  }

  public remove(alert: ErrorNotification) {
    this.notifications = this.notifications.filter(
      (n) => n.httpErrorCode !== alert.httpErrorCode && n.message !== alert.message
    );
    this.notify.next(this.notifications);
  }
}

export default new ErrorNotificationService();
