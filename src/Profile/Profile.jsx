import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
  return (
    <div className={css.container}>
      <div className={css.iconContainer}>
        <img className={css.icon}
          src={image}
          alt="User avatar"
        />
       
        <p className={css.userName}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
       </div>

      <ul className={css.containerActivity}> 
        <li className={css.activityIcon}>
          <span>Followers</span>
          <span className={css.activityText}>{followers}</span>
        </li >
        <li className={css.activityIcon}>
          <span>Views</span>
          <span className={css.activityText}>{views}</span>
        </li>
        <li className={css.activityIcon}>
          <span>Likes</span>
          <span className={css.activityText}>{likes}</span>
        </li>
      </ul>
    </div>

  );
};
export default Profile;