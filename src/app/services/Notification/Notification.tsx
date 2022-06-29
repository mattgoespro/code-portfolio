import { FunctionComponent } from 'react';
import { ErrorNotification } from './Notification';
import Alert from '@mui/material/Alert';
import NotificationService from './Notification';

interface AlertToastProps {
  alert: ErrorNotification;
  number: number;
}

const AlertToast: FunctionComponent<AlertToastProps> = (props: AlertToastProps) => {
  return (
    <div>
      <Alert severity="error" onClose={() => NotificationService.remove(props.number)}>
        {props.alert.error} - {props.alert.message}
      </Alert>
    </div>
  );
};

export default AlertToast;
