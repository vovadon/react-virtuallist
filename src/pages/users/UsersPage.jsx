import styles from './UsersPage.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../features/account/accountSlice";
import VirtualList from "../../components/VirtualList";
import AccountInfo from './AccountInfo';

const UsersPage = () => {
  const [selected, setSelected] = useState();
  
  const users = useSelector(state => state.account.users);
  
  const dispatch = useDispatch();

  const onUpdateHandler = (updatedUser) => {
    dispatch(updateUser(updatedUser));
  }
  
  return (
    <section className={styles.wrapper}>
      <div className={styles.usersListBlock}>
        <VirtualList users={users} selected={selected} onSelect={setSelected} />
      </div>
      <div className={styles.accountInfoBlock}>
        <AccountInfo user={selected} onUpdate={onUpdateHandler} />
      </div>
    </section>
  )
}

export default UsersPage;