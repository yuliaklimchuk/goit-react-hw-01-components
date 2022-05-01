import style from './friendList.module.css';
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => { 
    return <section>
        <ul className={style.friend_list}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li className={style.item}
                    key={id}
                >
                    <span className={
                            isOnline
                            ? style.isOnline
                            : style.isOffline
                    }
                    ></span>
                    <img className={style.avatar} src={ avatar} alt="User avatar" />
                    <p className={style.name}>{ name}</p>
                </li>
            ))}
        </ul>
    </section>
}

FriendList .propTypes = {
    friends: PropTypes.array.isRequired
};