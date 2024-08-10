function getStarDate(day, month, year) {
    const digits = [
        ['*****', '*   *', '*   *', '*   *', '*****'],
        ['  *  ', ' **  ', '  *  ', '  *  ', '*****'],
        ['*****', '    *', '*****', '*    ', '*****'],
        ['*****', '    *', '*****', '    *', '*****'],
        ['*   *', '*   *', '*****', '    *', '    *'],
        ['*****', '*    ', '*****', '    *', '*****'],
        ['*****', '*    ', '*****', '*   *', '*****'],
        ['*****', '    *', '   * ', '  *  ', ' *   '],
        ['*****', '*   *', '*****', '*   *', '*****'],
        ['*****', '*   *', '*****', '    *', '*****']
    ];

    const dateString = day.toString().padStart(2, '0') +
        month.toString().padStart(2, '0') +
        year.toString();

    let result = '';
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < dateString.length; j++) {
            result += digits[parseInt(dateString[j])][i] + ' ';
            if (j === 1 || j === 3) result += '  ';
        }
        result += '\n';
    }
    return result;
}