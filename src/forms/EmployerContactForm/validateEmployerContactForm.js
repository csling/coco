export default function validateContact(data, props) {
  const errors = {};
  if(!data.contactName) {
    errors.contactName = 'A contact name is required!';
  }

  if(!data.contactEmailAddress) {
    errors.contactEmailAddress = 'A contact email address is required!';
  }

  if(!data.contactPhoneNumber) {
    errors.phone = 'A contact phone number is required!';
  } else if(!/\d{3}-\d{3}-\d{4}/.test(data.contactPhoneNumber)) {
    errors.contactPhoneNumber = 'Phone must match the form "999-999-9999"'
  }
  return errors;
}
