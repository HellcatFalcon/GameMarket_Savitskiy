
console.log('Перевірка підключеного файлу скриптів market.js')

let itemsDiv = document.getElementById("items");

if(itemsDiv) {
    console.log(itemsDiv)

    console.log('Поле classList: ',itemsDiv.classList)
    console.log('Поле id: ', itemsDiv.id)
    console.log('Поле clientWidth', itemsDiv.clientWidth)
    console.log('Поле innerHTML: ', itemsDiv.innerHTML)

    itemsDiv.innerText = 'Програмно доданий текст'
    itemsDiv.innerText += 'Другий програмно доданий текст'

    itemsDiv.innerHTML = '<h1>Відформатований HTML код</h1>'
} else {
    console.log('Блок товарів не знайдено')
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=
    , initial-scale=1.0">
    <title>Market</title>
</head>
<body>
    <content>

        <div class="title">Товари на які діє знижка</div>

        <div id= "items" class="items"></div>
        <div>
            <p>Житомир</p>
            <p>вул. Київська, 106</p>
            <p>| +38 (067) 414-53-30*</p>
        </div>
        <div>*Знижка в розмірі сто гривень діє з Loren, 1psu
            dolor
            sit ant consectetur adipisicine elit. Ques officia
            distinctio Itaque quisquan ratione fugit, incidunt sint,
            corporis justo inventore facere. Voluptates,
            temeti Veritatts er prouldent factls Susciplt eague
            nica. Loren ipsun dolors Silt ence consectetur
            Cipsanspit Comor gastepon foglat- Expedita.
            accusantium Laborum soluta officIis, auten
            คุนโรดุมลล enia erron sint expLicabo ad magnan a deserunt
            qutexcepturt nemo.cciy</div>
    </content>

    <script src="market.js"></script>
    
</body>
</html>