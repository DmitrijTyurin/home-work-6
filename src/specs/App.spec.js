import { describe, it, expect } from 'vitest';
import flushPromises from 'flush-promises';
import { mount } from '@vue/test-utils';
import component from '../App.vue';
import sampleData from '../fixtures/products.json';
import { createRouter, createWebHistory } from 'vue-router';
import { setActivePinia, createPinia } from 'pinia';
import axios from 'axios';

import Page from '../Page.vue'
import PageAdd from '../PageAdd.vue'
import PageBuy from '../PageBuy.vue'
import PageLogin from '../PageLogin.vue'
import PageCart from '../PageCart.vue'
import PageProduct from '../PageProduct.vue'

vi.mock('axios');
axios.get = vi.fn().mockResolvedValue({
     status: 200,
     data: sampleData,
});

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          name: 'main',
          component: Page
        },
        {
          path: '/add',
          name: 'add',
          component: PageAdd
        },
        {
          path: '/buy',
          name: 'buy',
          component: PageBuy
        },
        {
          path: '/login',
          name: 'login',
          component: PageLogin
        },
        {
          path: '/cart',
          name: 'cart',
          component: PageCart
        },
        {
          path: '/products/:prodId',
          name: 'product',
          props: true,
          component: PageProduct,
        }
      ],
});

const pinia = createPinia();

beforeEach(async () => {
    router.push('/');
    await router.isReady();
    setActivePinia(pinia);
});

describe('Products app', async () => {
    const buildWrapper = () => {
    return mount(component, {
        global: {
            plugins: [pinia, router],
        }});
  };

  it('mounts without error', () => {
    const wrapper = buildWrapper();
    expect(wrapper.exists).toBeTruthy();
  });

  it('Main page. Loads data', async () => {
    const wrapper = buildWrapper();
    await flushPromises();
    expect(wrapper.html()).toContain(`Fjallraven`);
  });
});