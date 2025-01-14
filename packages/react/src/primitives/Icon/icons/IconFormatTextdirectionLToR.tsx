import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';

export const IconFormatTextdirectionLToR = (props) => {
  const { className, ...rest } = props;
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 4V8C7.9 8 7 7.1 7 6C7 4.9 7.9 4 9 4ZM17 2H9C6.79 2 5 3.79 5 6C5 8.21 6.79 10 9 10V15H11V4H13V15H15V4H17V2ZM17 14V17H5V19H17V22L21 18L17 14Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
