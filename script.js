const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// 追加ボタンが押された時の処理
addButton.addEventListener('click', () => {
  const text = taskInput.value.trim();
  
  // 空欄じゃなければ処理する
  if (text !== '') {
    const li = document.createElement('li');

    // チェックボックスを作る
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    // チェックされたら取り消し線を引くクラスをつける
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        li.classList.add('completed');
      } else {
        li.classList.remove('completed');
      }
    });

    // 文字の部分を作る
    const span = document.createElement('span');
    span.textContent = text;

    // リストに合体させる
    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);

    // 入力欄を空に戻す
    taskInput.value = '';
  }
});