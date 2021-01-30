console.log('classWork2');

alert('Задумайте одну из 36 карт и нажмите ОК');

let suit = confirm('Масть красная?');

if (suit == true) { //масть красная

    suit = confirm('Это буба?');

    if (suit == true) {
        suit = '<img src="img/buba.png" alt="Буби">'; // буба
    } else {
        suit = '<img src="img/chervy.png" alt="Черви">'; // черви
    }
    
} else { //масть черная

    suit = confirm('Это пики?');

    if (suit == true) {
        suit = '<img src="img/piki.png" alt="Пики">'; // пики
    } else {
        suit = '<img src="img/trefy.png" alt="Трефы">'; // трефы
    }

}

let rank = confirm('Ранг карты выше 10?');

if (rank == true) { // высший ранг

    rank = confirm('Ранг карты мужского рода?'); 

    if (rank == true) { 
        
        rank = confirm('Это туз?'); 

        if (rank == true) {

            rank = 'Туз';

        } else {

            rank = confirm('Это валет?'); 

            if (rank == true) {
                rank = 'Валет';
            } else {
                rank = 'Король';
            }

        }


    } else {
        rank = 'Дама';
    } 

} else { // низший ранг

    rank = confirm('У вас нечетный ранг карты?'); 

    if (rank == true) {

        rank = confirm('У вас 7ка?');   
        
        if (rank == true) {
            rank = '7';
        } else {
            rank = '9';           
        }

    } else {

        rank = confirm('У вас двухзначный ранг карты?');

        if (rank == true) {
            rank = '10';
        } else {

            rank = confirm('У вас 8ка?');

            if (rank == true) {
                rank = '8';
            } else {
                rank = '6';           
            }

        }

    }

}

