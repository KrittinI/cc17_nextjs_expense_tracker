export const formatCurrency = value => {
    return new Intl.NumberFormat("en-US", {
        style: 'decimal',
        minimumFractionDigits: 2
    }).format(value)
}

export const formatDate = value => {
    let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Intl.DateTimeFormat("en-US", options).format(value)
}

export const getCategoryImageMaping = () => {
    const map = new Map();
    map.set('Transportation', '/transportation.png')
    map.set('Clothing', '/clothing.png')
    map.set('Education', '/education.png')
    map.set('Entertainment', '/entertainment.png')
    map.set('Food', '/food.png')
    map.set('Health Care', '/health.png')
    map.set('Housing', '/housing.png')
    map.set('Insurance', '/insurance.png')
    map.set('Miscellaneous', '/miscellaneous.png')
    map.set('Personal Care', '/personal.png')
    map.set('Shopping', '/shopping.png')
    map.set('Utilities', '/utilities.png')
    return map
}