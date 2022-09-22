import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { IconButton } from '@mui/material';
import { SvgIconPropsSizeOverrides } from '@mui/material/SvgIcon/SvgIcon';
import { OverridableStringUnion } from '@mui/types';
import { Link } from 'react-router-dom';
import './Arrow.scss';

interface ArrowProps {
  type: 'icon' | 'button' | 'link';
  direction: 'left' | 'right';
  size:
    | OverridableStringUnion<'inherit' | 'large' | 'medium' | 'small', SvgIconPropsSizeOverrides>
    | number;
  label?: string;
  route?: string;
  onClick?: () => void;
}

export function Arrow(props: ArrowProps) {
  const iconSize =
    typeof props.size === 'object'
      ? {
          fontSize: props.size
        }
      : { width: props.size };
  const icon =
    props.direction === 'left' ? (
      <NavigateBeforeIcon className="icon-arrow" {...iconSize} />
    ) : (
      <NavigateNextIcon className="icon-arrow" {...iconSize} />
    );

  let arrow: JSX.Element;

  switch (props.type) {
    case 'button': {
      arrow = <IconButton onClick={props.onClick}>{icon}</IconButton>;
      break;
    }
    case 'icon': {
      arrow = icon;
      break;
    }
    case 'link': {
      arrow = <Link to={props.route}>{icon}</Link>;
      break;
    }
  }

  // TODO: Add label
  return arrow;
}
