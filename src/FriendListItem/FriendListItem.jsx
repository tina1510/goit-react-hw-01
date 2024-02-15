import css from "./FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem = ({ friend:{avatar, name, isOnline} }) => {

  return (
    <div>
      <img className={css.icon} src={avatar} alt="Avatar" width="48" />
      <p className={css.userName}>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.offline)}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;