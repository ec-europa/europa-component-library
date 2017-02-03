// Form upload behaviors.
document.querySelectorAll('.file-upload__label').onchange = () => {
  document.querySelectorAll('.file-upload__message').value = this.files[0].name;
};
