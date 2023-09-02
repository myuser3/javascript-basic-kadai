const text = document.getElementById('btn');

text.addEventListener('cick', () => {
  setTimeout(() => {
    console.log('ボタンをクリックしました');
  }, 2000);  
});
