const conta = {
    email: 'moa@dio.bank',
    password: '123456',
    name: 'Moacir Mariz',
    balance: 2000000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
