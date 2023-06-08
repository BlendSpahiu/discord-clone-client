import { ReactElement } from 'react';
import classNames from 'classnames';
import { Avatar } from '../../components/common/Avatar/Avatar';

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
