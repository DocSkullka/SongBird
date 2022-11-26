if (localStorage.getItem('digital') == 30){
    document.querySelector('.end').textContent =`Круто, вы набрали максимальное количество баллов. УРА!!!`
    document.querySelector('.aButt').style.display = 'none'
} else {
    document.querySelector('.end').textContent = `Всы не смогли ответить на все вопросы правильно. Вы ответили на ${localStorage.getItem('digital')} из 30. Попробуйте ещё `
    document.querySelector('.restart').style.display = 'block'
    document.querySelector('.restart').s
}
