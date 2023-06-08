import { ReactElement } from 'react';
import {
  InboxIcon,
  MagnifyingGlassIcon,
  PhoneArrowUpRightIcon,
  QuestionMarkCircleIcon,
  TagIcon,
  UserCircleIcon,
  UserPlusIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { DMHeaderInfoProps } from './DirectMessages.props';

export const DMHeaderInfo = ({
  showUserProfile,
  setShowUserProfile,
}: DMHeaderInfoProps): ReactElement => {
  const toggleUserProfile = () => setShowUserProfile((prev) => !prev);

  return (
    <div className="dm-header-icons">
      <PhoneArrowUpRightIcon width={22} height={22} color="#949ba4" />
      <VideoCameraIcon width={22} height={22} color="#949ba4" />
      <TagIcon width={22} height={22} color="#949ba4" />
      <UserPlusIcon width={22} height={22} color="#949ba4" />
      <UserCircleIcon
        width={22}
        height={22}
        color={showUserProfile ? 'lightgray' : '#949ba4'}
        onClick={toggleUserProfile}
      />
      <div className="dm-header-icons-search">
        <motion.input
          whileFocus={{
            width: 240,
            transition: { duration: 0.3, ease: 'easeInOut' },
          }}
          type="text"
          placeholder="Search"
        />
        <MagnifyingGlassIcon
          width={16}
          height={16}
          color="#949ba4"
          style={{ marginRight: 12 }}
        />
      </div>
      <InboxIcon width={22} height={22} color="#949ba4" />
      <QuestionMarkCircleIcon width={22} height={22} color="#949ba4" />
    </div>
  );
};
