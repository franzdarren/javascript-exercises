const button = document.getElementById('logButton');

if (button) {
  button.addEventListener('click', function(event) {
    console.log('button is clicked');
    console.log('clientX:', event.clientX, 'clientY:', event.clientY);
    console.log('eventTarget:', event.target);
  });
} else {
  console.warn('Button with id "logButton" not found.');
}
