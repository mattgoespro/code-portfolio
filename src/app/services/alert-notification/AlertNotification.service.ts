import { Subject } from 'rxjs/internal/Subject';

export interface AlertNotificationDetails {
  error: string;
  message: string;
}

class AlertNotificationService {
  private notifications: AlertNotificationDetails[] = [];
  public notify: Subject<AlertNotificationDetails[]> = new Subject();

  public log({ status, statusText }) {
    const alert = {
      error: this.httpErrorToString(status),
      message: statusText
    };

    if (
      this.notifications.find((n) => n.error === alert.error && n.message === alert.message) == null
    ) {
      this.notifications.push(alert);
      this.notify.next(this.notifications);
    }
  }

  public getNotifications() {
    return this.notifications;
  }

  public remove(alert: AlertNotificationDetails) {
    this.notifications = this.notifications.filter(
      (n) => n.error != alert.error && n.message != alert.message
    );
    this.notify.next(this.notifications);
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

export default new AlertNotificationService();
