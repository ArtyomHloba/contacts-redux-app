import { FaStar } from 'react-icons/fa6';
import { IoTrashOutline } from 'react-icons/io5';
import styles from './ContactsListItem.module.css';

function ContactsListItem ({
  contact: { id, fullName, phoneNumber, isFavourite },
  remove,
  toggle,
}) {
  return (
    <section className={styles.contactItem}>
      <h3>{fullName}</h3>
      <p>{phoneNumber}</p>
      <button className={styles.starBtn} onClick={() => toggle(id)}>
        <FaStar style={{ color: isFavourite ? 'yellow' : 'gray' }} />
      </button>
      <button className={styles.delBtn} onClick={() => remove(id)}>
        <IoTrashOutline />
      </button>
    </section>
  );
}

export default ContactsListItem;
