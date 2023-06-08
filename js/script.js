function submitForm(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;
  
    const submittedDataContainer = document.getElementById('submittedDataContainer');
    const submittedDataList = document.getElementById('submittedDataList');
  
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Nama : </span> ${name}<br>
                          <span>Tanggal Lahir : </span> ${birthdate}<br>
                          <span>Jenis Kelamin : </span> ${gender}<br>
                          <span>Pesan : </span> ${message}`;
  
    submittedDataList.appendChild(listItem);
    submittedDataContainer.style.display = 'block';
  
    // Reset form
    document.getElementById('myForm').reset();

    const welcomeMessage = document.getElementById('welcomemessage');
    welcomeMessage.textContent = `Hi ${name}, Welcome to Website`;
  }
  
  document.getElementById('myForm').addEventListener('submit', submitForm);
  

  function getCurrentTime() {
    const currentDate = new Date();
    const options = {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    };
    const currentTime = currentDate.toLocaleString('en-US', options);
    return currentTime;
  }
  
document.addEventListener('DOMContentLoaded', function () {
    const currentTimeElement = document.getElementById('currentTime');
    currentTimeElement.textContent = 'Current Time: ' + getCurrentTime();
});