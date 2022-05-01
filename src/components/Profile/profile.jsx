import style from './profile.module.css';
import PropTypes from "prop-types"

export const Profile = ({ username, tag, location, avatar, stats }) => { 
    return <section className={style.profile}>
        <div className={style.descroption}>
            <img
                src={ avatar}
                alt="User avatar"
                className={style.avatar}
            />
            <p className={style.name}>{ username}</p>
            <p className={style.tag}>{ tag}</p>
            <p className={style.location}>{ location}</p>
        </div>
        <ul className={style.stats}>
            <li className={style.stats_item}>
                <span className={style.label}>Followers</span>
                <span className={style.quantity}>{ stats.followers}</span>
            </li>
            <li className={style.stats_item}>
                <span className={style.label}>Views</span>
                <span className={style.quantity}>{stats.views }</span>
            </li>
            <li className={style.stats_item}>
                <span className={style.label}>Likes</span>
                <span className={style.quantity}>{stats.likes }</span>
            </li>
        </ul>
    </section>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.array,
};