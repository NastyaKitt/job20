let clsPopup = document.getElementById('clsPopup');
let popupWin = document.getElementById('popupWin');
let callPopups = [
    document.getElementById('callPopup0'),
    document.getElementById('callPopup1'),
    document.getElementById('callPopup2')
];

callPopups.forEach(button => {
    button.addEventListener('click', function() {
        popupWin.classList.add('show');
    });
});

clsPopup.addEventListener('click', function() {
    popupWin.classList.remove('show');
});

// Маскки

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function mask(e) {
    //console.log('mask',e);
    var matrix = this.placeholder,// .defaultValue
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }
  window.addEventListener("DOMContentLoaded", function() {
    var inputs = [document.querySelector("#tel0"), document.querySelector("#tel1")]; // Массив инпутов
    inputs.forEach(function(input) {
        input.addEventListener("input", mask, false); // Добавляем обработчик события на input
        input.focus(); // Устанавливаем фокус
        setCursorPosition(3, input); // Устанавливаем курсор в начало
    });
});


// 


// Функция для обновления класса 'show' у соответствующих элементов priceWin
function updatePriceWinVisibility() {
    // Получаем все кнопки и элементы priceWin
    const buttons = document.querySelectorAll('.buttonss');
    const priceWins = document.querySelectorAll('.priceWin');

    // Проходим по всем кнопкам
    buttons.forEach((button, index) => {
        // Если у кнопки есть класс 'activate', то у соответствующего priceWin добавляем класс 'show'
        if (button.classList.contains('activate')) {
            priceWins[index].classList.add('show');
        } else {
            priceWins[index].classList.remove('show');
        }
    });
}

// Изначально обновляем видимость при загрузке страницы
updatePriceWinVisibility();

// Обработчик события для всех кнопок
document.querySelectorAll('.buttonss').forEach(button => {
    button.addEventListener('click', () => {
        // Если нажатая кнопка уже активная, ничего не делаем
        if (button.classList.contains('activate')) return;

        // Убираем класс "activate" у всех кнопок
        document.querySelectorAll('.buttonss').forEach(btn => {
            btn.classList.remove('activate');
        });
        
        // Добавляем класс "activate" к нажатой кнопке
        button.classList.add('activate');

        // Обновляем видимость priceWin
        updatePriceWinVisibility();
    });
});

// 


let currentIndex = 0;  // индекс текущего элемента
const items = document.querySelectorAll('.revieItem');

function showNextItem() {
    // Скрываем текущий элемент
    items[currentIndex].classList.remove('show');

    // Увеличиваем индекс, если он меньше, чем общее количество элементов
    currentIndex = (currentIndex + 1) % items.length;

    // Показать следующий элемент
    items[currentIndex].classList.add('show');
}

// Запускаем слайдер каждые 5 секунд (5000 миллисекунд)
setInterval(showNextItem, 5000);

// politicWin


let politicWin = document.getElementById('politicWin')
let callPolit = document.getElementById('callPolit')
let clsPolit = document.getElementById('clsPolit')


callPolit.addEventListener('click', function(){
    politicWin.classList.add('show')
})
clsPolit.addEventListener('click', function(){
    politicWin.classList.remove('show')
})