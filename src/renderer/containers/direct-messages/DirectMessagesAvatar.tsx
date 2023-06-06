import { ReactElement } from 'react';
import { Avatar } from '../../components/common/Avatar/Avatar';
import classNames from 'classnames';

export const DirectMessagesAvatar = ({
  className,
}: {
  className?: string;
}): ReactElement => {
  return (
    <Avatar
      className={classNames(className)}
      style={{ marginBottom: 12 }}
      serverName="Direct Messages"
    />
  );
};
