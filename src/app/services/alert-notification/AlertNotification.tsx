import { AlertNotificationDetails } from './AlertNotification.service';
import Alert from '@mui/material/Alert';

interface AlertNotificationProps {
  alert: AlertNotificationDetails;
  onClose: () => void;
}

const AlertNotification = (props: AlertNotificationProps) => {
  return (
    <div>
      <Alert severity="error" variant="filled" onClose={props.onClose}>
        {props.alert.message}
      </Alert>
    </div>
  );
};

export default AlertNotification;
