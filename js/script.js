document.addEventListener('DOMContentLoaded', function() {
  const inputField = document.getElementById('keyword-input');
  const targetKeyword = '特定のキーワード'; // 検索するキーワードを設定

  inputField.addEventListener('input', function() {
      const inputValue = inputField.value;
      if (inputValue === targetKeyword) {
          inputField.classList.add('keyword-match');
      } else {
          inputField.classList.remove('keyword-match');
      }
  });
});