const data = [
    { id: 1, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/KammaevaPlan.jpeg', adress: 'Подмосковье, д. Примерное', price: 25000000, area: 250, rooms: 10, floor: '7/14', street: 'Алые Паруса' },
    { id: 2, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Москва, ул. Центральная 10', price: 15000000, area: 75, rooms: 7, floor: '7/14', street: 'Перспектива' },
    { id: 3, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Санкт-Петербург, ул Деловая 5', price: 25000000, area: 100, rooms: 3, floor: '7/14', street: 'Примакова' },
    { id: 4, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Подмосковье, д. Примерное', price: 50000000, area: 200, rooms: 13, floor: '7/14', street: 'Примакова' },
    { id: 5, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Москва, ул. Центральная 10', price: 15000001, area: 80, rooms: 4, floor: '7/14', street: 'Алые Паруса' },
    { id: 6, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Подмосковье, д. Примерное', price: 25000000, area: 250, rooms: 10, floor: '7/14', street: 'Примакова' },
    { id: 7, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Москва, ул. Центральная 10', price: 15000000, area: 75, rooms: 7, floor: '7/14', street: 'Перспектива' },
    { id: 8, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Санкт-Петербург, ул Деловая 5', price: 25000000, area: 100, rooms: 3, floor: '7/14', street: 'Алые Паруса' },
    { id: 9, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Подмосковье, д. Примерное', price: 50000000, area: 200, rooms: 13, floor: '7/14', street: 'Алые Паруса' },
    { id: 10, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Москва, ул. Центральная 10', price: 15000000, area: 80, rooms: 4, floor: '7/14', street: 'Перспектива' },
    { id: 11, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Подмосковье, д. Примерное', price: 25000000, area: 250, rooms: 10, floor: '7/14', street: 'Алые Паруса' },
    { id: 12, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Москва, ул. Центральная 10', price: 15000000, area: 75, rooms: 7, floor: '7/14', street: 'Перспектива' },
    { id: 13, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Санкт-Петербург, ул Деловая 5', price: 25000000, area: 100, rooms: 3, floor: '7/14', street: 'Примакова' },
    { id: 14, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Подмосковье, д. Примерное', price: 50000000, area: 200, rooms: 13, floor: '7/14', street: 'Примакова' },
    { id: 15, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Москва, ул. Центральная 10', price: 15000000, area: 80, rooms: 4, floor: '7/14', street: 'Алые Паруса' },
    { id: 16, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Подмосковье, д. Примерное', price: 25000000, area: 250, rooms: 10, floor: '7/14', street: 'Примакова' },
    { id: 17, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Москва, ул. Центральная 10', price: 15000000, area: 75, rooms: 7, floor: '7/14', street: 'Перспектива' },
    { id: 18, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Санкт-Петербург, ул Деловая 5', price: 25000000, area: 100, rooms: 3, floor: '7/14', street: 'Алые Паруса' },
    { id: 19, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Подмосковье, д. Примерное', price: 50000000, area: 200, rooms: 13, floor: '7/14', street: 'Алые Паруса' },
    { id: 20, map: '3Af7a9e58994e07c4260eed3a826069f5e1a3dc5972843cf80223779c0ae47442a', img: '/images/img4.jpg', img2: '/images/img5.png', adress: 'Москва, ул. Центральная 10', price: 15000000, area: 80, rooms: 4, floor: '7/14', street: 'Перспектива' },
]
export default data;