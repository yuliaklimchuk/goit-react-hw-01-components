import style from './friendList.module.css';
import PropTypes from "prop-types";
import { FriendListItem } from './FriendListItem';


export const FriendList = ({ friends }) => { 
    return <section>
        <ul className={style.friend_list}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                );
            })}
        </ul>
    </section>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        })
    ),
};