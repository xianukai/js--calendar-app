const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
let dateNum = date.getDate();

document.querySelector('.js-year').innerHTML = `${year}年`;
document.querySelector('.js-month').innerHTML = `${month+1}月`;
let $jsDate = document.querySelector('.js-date');

$jsDate.innerHTML = dateNum;

document.querySelector('.js-decrement').addEventListener('click', () => {
  if($jsDate.innerHTML > 1) {
    $jsDate.innerHTML--;
  } else {
    false;
  }
})

document.querySelector('.js-increment').addEventListener('click', () => {
  if($jsDate.innerHTML < 31) {
    $jsDate.innerHTML++;
  } else {
    false;
  }
})

document.querySelector('.js-incident').addEventListener('click', () => {
  // クリックしたら、非表示のＤＯＭにdisplay: blockのクラスを適用させる
  document.querySelector('.incident').classList.toggle('true');

  // たぶん表示非表示のクラスの付け替えではない。中身を書き換えてuploadする。もしかしたら新しい配列を作り直す関数を実行させる必要がある。
})

// もし、10月31日の状態でクリックしたら10月31日に起きた出来事を表示させる。 .incidentクラスのＤＯＭを表示させる

// if(選択された日付 == 26) { 選択したDOM.innerHTML == xxxxx[配列の26日用の印インデックス番号？] }

// 出来事オブジェクト
import { incidentDatalist } from './module.js'
console.log(incidentDatalist);

// ここで選択された日時によってクリックされた際に参照されるオブジェクトが変化するような実装にする if文を使って分岐させる？それともswitch?


// updateList()
function updateList() {
  let listHtml = '';

  for(const data of incidentDatalist) {
    listHtml += `<li>${data.year}年 : ${data.name}</li>`;
  }

  document.querySelector('.incident__box').innerHTML = listHtml;
}

updateList();




// ハンバーガーメニュー
const menuIcon = document.querySelector('.js-menuIcon');
const navBg = document.querySelector('.js-navBg');

// ハンバーガーアイコンを押したら「is-active」クラスを付与してドロワーメニューが開く
menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('isActive');
})

// 背景を押したら「is-active」クラスを取り除いてドロワーメニューを閉じる
navBg.addEventListener('click', () => {
  menuIcon.classList.remove('isActive');
})