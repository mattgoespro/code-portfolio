import Alert from '@mui/material/Alert/Alert';
import ErrorNotificationService from './ErrorNotification.service';

interface ErrorNotificationProps {
  notification: {
    httpErrorCode: number;
    message: string;
  };
}

const ErrorNotification = (props: ErrorNotificationProps) => {
  return (
    <Alert
      className="notification"
      severity="error"
      variant="standard"
      onClose={() => ErrorNotificationService.remove(props.notification)}
    >
      Error: {props.notification.message}
    </Alert>
  );
};

export default ErrorNotification;
