import * as productsStore from '../stores/products.js';
import axios from 'axios';
import sampleData from '../fixtures/products.json';
import sampleAddData from '../fixtures/add_products.json';
import sampleFilterData from '../fixtures/filter_products.json';
import { setActivePinia, createPinia } from 'pinia';
import { useProductsStore } from '../stores/products.js';

describe('Products store', () => {
    vi.mock('axios');
    
    beforeEach(() => {
        setActivePinia(createPinia())
    })
  
    it('Products imports without error', () => {
        expect(productsStore).toBeDefined();
        expect(productsStore).toHaveProperty('useProductsStore');
    });

    const init = async (prod) => {
        axios.get = vi.fn().mockResolvedValue({
            status: 200,
            data: sampleData,
        });
        await prod.getProductData();
    }

    it('use axios to fetch products list', async () => {
        const product = useProductsStore();
        await init(product);
        expect(product.productDatas).toEqual(sampleData);
    });

    it('add new product', async () => {
        const product = useProductsStore();
        await init(product);
        product.add('new product',100,'my description','my category','http://localhost/image.jpg',10,14);
        expect(product.productDatas).toEqual(sampleAddData);
    });

    it('set filter', async () => {
        const product = useProductsStore();
        await init(product);
        product.setFilter('fj',null,null);
        expect(product.filteredDatas).toEqual(sampleFilterData);
        expect(product.filteredDatas).not.toEqual(sampleData);
        expect(product.productDatas).toEqual(sampleData);
    })
});