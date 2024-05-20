// console.log('Перевірка підключеного файлу скриптів market.js')

let itemsArray = [
    {
        firstName: "Віталій",
        lastName: "Шатківський",
        subject: "Інформатика",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    },
    {
    firstName: "Віталій",
    lastName: "Шатківський",
    subject: "Інформатика",
    photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
    url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    },
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
        `
        <div class = "item">
            <h2>Вчитель №${index + 1} 3 ${itemsArray.length}</h2>
            <p>${item.firstName} ${item.lastName}</p>
            <p>Предмет: ${item.subject}</p>
            <p><img src= "${item.photo}" class="item-image"></p>
            <p><a href = "${item.url}" target="blank" class = "bonus price ">Профіль</a></p>
        </div>
        `
    })
} else {
    console.log('Блок товарів не знайдено')
}