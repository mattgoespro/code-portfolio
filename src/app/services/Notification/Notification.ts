import { Subject } from 'rxjs/internal/Subject';

export interface ErrorNotification {
  error: string;
  message: string;
}

class NotificationService {
  private notifications: ErrorNotification[] = [];
  public notify: Subject<ErrorNotification> = new Subject();

  public log({ status, statusText }) {
    const alert = {
      error: this.httpErrorToString(status),
      message: statusText
    };
    this.notifications.push(alert);
    this.notify.next(alert);
  }

  public getNotifications() {
    return this.notifications;
  }

  public remove(number: number) {
    this.notifications.splice(number);
  }

  private httpErrorToString(httpErrorCode: number): string {
    let httpErrorString: string;

    switch (httpErrorCode) {
      case 401:
        httpErrorString = 'Forbidden';
        break;
      case 404:
        httpErrorString = 'Not Found';
        break;
      case 500:
        httpErrorString = 'Internal Server Error';
        break;
      case 503:
        httpErrorString = 'Service Unavailable';
        break;
      default:
        throw new Error(`Unrecognized HTTP error code '${httpErrorCode}'`);
    }

    return httpErrorString;
  }
}

export default new NotificationService();
