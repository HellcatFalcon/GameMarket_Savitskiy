// console.log('Перевірка підключеного файлу скриптів market.js')

let itemsArray = [
 {
    title:
    image:
    mono:50
    pb:30
    prise_standart:1000
    prise_discount:2000
    prise_coupon:3000

 }
    
]

let itemsDiv = document.getElementById("items");

if(itemsDiv) {
    // console.log(itemsDiv)

    // console.log('Поле classList: ',itemsDiv.classList)
    // console.log('Поле id: ', itemsDiv.id)
    // console.log('Поле clientWidth', itemsDiv.clientWidth)
    // console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    // itemsDiv.innerText = 'Програмно доданий текст'
    // itemsDiv.innerText += 'Другий програмно доданий текст'

    // itemsDiv.innerHTML = '<h1>Відформатований HTML код</h1>'
    itemsArray.forEach((item, index) => {
        itemsDiv.innerHTML +=
        ` <div class = "item">
        
        <div class ="item-title"> $(item.title)</div>
        
        <!-- Блок товару(малюнок)--!>
        <div class="item-image">$(item.image)</div>
        `
    })
} else {
    console.log('Блок товарів не знайдено')
}