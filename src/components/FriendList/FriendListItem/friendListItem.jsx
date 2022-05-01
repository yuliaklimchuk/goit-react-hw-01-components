import style from './friendListItem.module.css';
import PropTypes from "prop-types";

export const FriendListItem = ({ avatar, name, isOnline }) => { 
    return (
        <li className={style.item}>
                <span className={
                    isOnline
                    ? style.isOnline
                    : style.isOffline
                }
                ></span>
                <img className={style.avatar} src={ avatar} alt="User avatar" />
                <p className={style.name}>{ name}</p>
            </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};