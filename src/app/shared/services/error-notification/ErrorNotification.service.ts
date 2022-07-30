import { ApiHttpErrorResponse } from '@shared/services/shared.model';
import { AxiosError } from 'axios';
import { Subject } from 'rxjs/internal/Subject';

export interface ErrorNotification {
  status: number;
  message: string;
}

class ErrorNotificationService {
  private static UNEXPECTED_ERROR_MESSAGE = 'An unexpected error has occurred. Please try again.';
  private notifications: ErrorNotification[] = [];
  public notify: Subject<ErrorNotification[]> = new Subject();

  public log(error: AxiosError) {
    if (error.isAxiosError && error.code !== AxiosError.ERR_CANCELED) {
      const notification: ErrorNotification = this.parseErrorToNotification(error);

      if (
        this.notifications.find(
          (n) => n.status === notification.status && n.message === notification.message
        ) == null
      ) {
        this.notifications.push(notification);
        this.notify.next(this.notifications);
      }
    }
  }

  private parseErrorToNotification(error: AxiosError) {
    const errorResponse = error.response;
    let status = errorResponse.status;
    let message: string = null;

    if (status === 504 || status === 401 || status === 403) {
      message = ErrorNotificationService.UNEXPECTED_ERROR_MESSAGE;
    } else {
      const responseData = errorResponse.data as ApiHttpErrorResponse;
      status = responseData.status;
      message = responseData.message;
    }

    return {
      status,
      message
    };
  }

  public getNotifications() {
    return this.notifications;
  }

  public remove(alert: ErrorNotification) {
    this.notifications = this.notifications.filter(
      (n) => n.status !== alert.status && n.message !== alert.message
    );
    this.notify.next(this.notifications);
  }
}

export default new ErrorNotificationService();
