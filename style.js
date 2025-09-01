
<script>
document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const dob = document.getElementById('dob').value;
  const genderElems = document.getElementsByName('gender');
  const address = document.getElementById('address').value.trim();
  const passportPhoto = document.getElementById('passportPhoto').files[0];
  const signature = document.getElementById('signature').files[0];
  const messageDiv = document.getElementById('message');

  messageDiv.textContent = '';
  messageDiv.className = '';

  if (firstName === '') {
    showMessage('Please enter your first name.', 'error');
    return;
  }

  if (lastName === '') {
    showMessage('Please enter your last name.', 'error');
    return;
  }

  if (!dob) {
    showMessage('Please select your date of birth.', 'error');
    return;
  }
  if (!isAdult(dob)) {
    showMessage('You must be at least 18 years old to register.', 'error');
    return;
  }

  let genderSelected = false;
  for (const g of genderElems) {
    if (g.checked) {
      genderSelected = true;
      break;
    }
  }
  if (!genderSelected) {
    showMessage('Please select your gender.', 'error');
    return;
  }

  if (address === '') {
    showMessage('Please enter your address.', 'error');
    return;
  }

  if (!passportPhoto) {
    showMessage('Please upload your passport size photo.', 'error');
    return;
  }
  if (!validateFile(passportPhoto, 2 * 1024 * 1024)) {
    showMessage('Passport photo must be JPG/PNG and less than 2MB.', 'error');
    return;
  }

  if (!signature) {
    showMessage('Please upload your signature.', 'error');
    return;
  }
  if (!validateFile(signature, 1 * 1024 * 1024)) {
    showMessage('Signature must be JPG/PNG and less than 1MB.', 'error');
    return;
  }

  showMessage('Registration successful! Thank you for signing up.', 'success');
  this.reset();
});

function showMessage(msg, type) {
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = msg;
  messageDiv.className = type;
}

function isAdult(dateString) {
  const dob = new Date(dateString);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  return age >= 18;
}

function validateFile(file, maxSize) {
  const allowedTypes = ['image/jpeg', 'image/png'];
  if (!allowedTypes.includes(file.type)) {
    return false;
  }
  if (file.size > maxSize) {
    return false;
  }
  return true;
}
</script>
