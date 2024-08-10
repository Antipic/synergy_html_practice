document.getElementById('birthForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const dayOfWeek = getDayOfWeek(day, month, year);
    const leapYear = isLeapYear(year) ? 'Да' : 'Нет';
    const age = calculateAge(day, month, year);
    const starDate = getStarDate(day, month, year);

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Результаты анализа:</h2>
        <p><strong>День недели:</strong> ${dayOfWeek}</p>
        <p><strong>Високосный год:</strong> ${leapYear}</p>
        <p><strong>Возраст:</strong> ${age} лет</p>
    `;

    const starDateDiv = document.getElementById('starDate');
    starDateDiv.innerHTML = `
        <h2>Дата рождения звёздочками:</h2>
        <pre>${starDate}</pre>
    `;
});