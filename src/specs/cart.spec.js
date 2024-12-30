import * as cartStore from '../stores/cart.js';
import { setActivePinia, createPinia } from 'pinia';
import { useCartStore } from '../stores/cart'

describe('Cart store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    });

    const data1 = {id: 1,
                  quantity: 1,
                  data: {id: 1,
                         title: 'new product', 
                         price: 100,
                         description: 'my description',
                         category: 'my category',
                         image: 'http://localhost/image.jpg',
                         rating: {rate: 10,
                                  count: 14
    }}};

    const data2 = {id: 2,
                    quantity: 1,
                    data: {id: 2,
                        title: 'new product2', 
                        price: 50,
                        description: 'my description2',
                        category: 'my category2',
                        image: 'http://localhost/image2.jpg',
                        rating: {rate: 11,
                                 count: 12
    }}};
    
    it('Cart imports without error', () => {
        expect(cartStore).toBeDefined();
        expect(cartStore).toHaveProperty('useCartStore');
    });

    it('Add two new products to cart', () => {
        const cart = useCartStore();
        cart.addCart(data1);
        cart.addCart(data2);
        expect(cart.inCart(1)).toBe(true);
        expect(cart.inCart(2)).toBe(true);
        expect(cart.cart.length).toBe(2);
    });

    it('Add one ptoduct and increment quantity', () => {
        const cart = useCartStore();
        cart.addCart(data1);
        cart.addCart(data1);
        expect(cart.inCart(1)).toBe(true);
        expect(cart.cart.length).toBe(1);
        expect(cart.cart[0].quantity).toBe(2);
    });

    it('Delete product', () => {
        const cart = useCartStore();
        cart.addCart(data1);
        cart.addCart(data2);
        expect(cart.inCart(1)).toBe(true);
        expect(cart.inCart(2)).toBe(true);
        expect(cart.cart.length).toBe(2);
        cart.delCart(1);
        expect(cart.inCart(1)).toBe(false);
        expect(cart.inCart(2)).toBe(true);
        expect(cart.cart.length).toBe(1);
    });

    it('Check function buttonName', () => {
        const cart = useCartStore();
        expect(cart.buttonName(1)).toBe('Добавить в корзину');
        cart.addCart(data1);
        expect(cart.buttonName(1)).toBe('Добавить в корзину (1)');
    });

    it('Check function getCart', () => {
        const cart = useCartStore();
        expect(cart.getCart()).toBe('Корзина');
        cart.addCart(data1);
        expect(cart.getCart()).toBe('Корзина (1)');
        cart.addCart(data1);
        cart.addCart(data2);
        expect(cart.getCart()).toBe('Корзина (3)');
    });

    it('Clear cart', () => {
        const cart = useCartStore();
        cart.addCart(data1);
        cart.addCart(data2);
        expect(cart.inCart(1)).toBe(true);
        expect(cart.inCart(2)).toBe(true);
        expect(cart.cart.length).toBe(2);
        cart.clearCart();
        expect(cart.inCart(1)).toBe(false);
        expect(cart.inCart(2)).toBe(false);
        expect(cart.cart.length).toBe(0);
    });

    it('Function incQuantity', () => {
        const cart = useCartStore();
        cart.addCart(data1);
        expect(cart.inCart(1)).toBe(true);
        expect(cart.cart[0].quantity).toBe(1);
        cart.incQuantity(1);
        expect(cart.cart[0].quantity).toBe(2);
    });

    it('Function decQuantity', () => {
        const cart = useCartStore();
        cart.addCart(data1);
        expect(cart.inCart(1)).toBe(true);
        expect(cart.cart[0].quantity).toBe(1);
        cart.decQuantity(1);
        expect(cart.cart[0].quantity).toBe(0);
        cart.decQuantity(1);
        expect(cart.cart[0].quantity).toBe(0);
    });

    it('Function allQuantity', () => {
        const cart = useCartStore();
        cart.addCart(data1);
        cart.addCart(data1);
        cart.addCart(data2);
        expect(cart.allQuantity()).toBe(3);
    });
});