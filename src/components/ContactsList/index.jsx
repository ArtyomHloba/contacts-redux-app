import { connect } from 'react-redux';
import ContactsListItem from './ContactsListItem';
import {
  removeContact,
  toggleFavourite,
} from '../../store/slices/contactsSlice/contsctsSlice';
import styles from './ContactsList.module.css';

function ContactsList ({ contacts, remove, toggle }) {
  const mapContacts = c => (
    <ContactsListItem key={c.id} contact={c} remove={remove} toggle={toggle} />
  );

  return (
    <section className={styles.section}>
      <h2>Contacts List</h2>
      <ul>{contacts.map(mapContacts)}</ul>
    </section>
  );
}

const mapStateToProps = ({ contactsList }) => contactsList;

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(removeContact(id)),
  toggle: id => dispatch(toggleFavourite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
