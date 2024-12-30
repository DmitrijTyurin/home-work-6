import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore('cart', () => {
    const cart = ref([])

    function inCart(id) {
        for(let i = 0; i <= cart.value.length-1; i++)
          if (cart.value[i].id === id) return true
        return false            
      }

    function addCart(data) {
        for(let i = 0; i <= cart.value.length-1; i++) {
          if (cart.value[i].id === data.id) {
            cart.value[i].quantity += 1
            return
          }}
        cart.value.push({id: data.id, quantity: 1, data: data})
      }

    function delCart(id) {
        for(let i = 0; i <= cart.value.length-1; i++) {
          if (cart.value[i].id === id) {
            cart.value.splice(i, 1)
            return
          }}
      }

    function buttonName(id) {
        for(let i = 0; i <= cart.value.length-1; i++)
          if (cart.value[i].id === id) return 'Добавить в корзину (' + cart.value[i].quantity + ')'
        return 'Добавить в корзину'               
      }

    function getCart() {
        let allQuantity = 0;
        for (let i = 0; i <= cart.value.length-1; i++) {
          allQuantity += cart.value[i].quantity;
        }
        if (allQuantity == 0) {
          return 'Корзина';
        }
        else {
          return 'Корзина (' + allQuantity + ')';
        }
      }

    function clearCart() {
        cart.value.length = 0;
    }

    function incQuantity(id) {
        for (let i = 0; i <= cart.value.length-1; i++){
            if (cart.value[i].id === id) {
                cart.value[i].quantity += 1
            }
        }
    }

    function decQuantity(id) {
        for (let i = 0; i <= cart.value.length-1; i++){
            if (cart.value[i].id === id) {
                if (cart.value[i].quantity > 0) {
                    cart.value[i].quantity -= 1
                }
            }
        }
    }

    function allQuantity() {
        let allQuant = 0;
        for (let i = 0; i <= cart.value.length-1; i++){
            allQuant += cart.value[i].quantity
        }
        return allQuant
    }

    function allPrice() {
        let allPrice = 0;
        for (let i = 0; i <= cart.value.length-1; i++){
            allPrice += cart.value[i].quantity * cart.value[i].data.price
        }
        return allPrice
    }

    return { cart, inCart, addCart, delCart, buttonName, getCart, clearCart, incQuantity, decQuantity, allQuantity, allPrice }
})