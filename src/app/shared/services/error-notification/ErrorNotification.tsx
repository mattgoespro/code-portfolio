import Alert from '@mui/material/Alert/Alert';
import ErrorNotificationService, { ErrorNotification } from './ErrorNotification.service';

interface ErrorNotificationProps {
  notification: ErrorNotification;
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
