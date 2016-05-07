export default function validateContact(data, props) {
  const errors = {};
  if(!data.firstName) {
    errors.firstName = 'Your first name is required!';
  }

  if(!data.lastName) {
    errors.lastName = 'Your last name is required!';
  }

  if(!data.emailAddress) {
    errors.emailAddress = 'Your email address is required!';
  }

  return errors;
}
