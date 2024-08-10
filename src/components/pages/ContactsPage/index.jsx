import ContactsForm from '../../ContactForm';
import ContactsList from '../../ContactsList';

function ContactsPage () {
  return (
    <div>
      <h1>Contacts</h1>
      <ContactsForm />
      <ContactsList />
    </div>
  );
}

export default ContactsPage;
