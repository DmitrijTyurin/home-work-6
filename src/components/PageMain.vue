<template>
    <ul>
        <li class="productData list" v-for="filteredData in productStore.filteredDatas" :key="filteredData.id">
            <div class="product sketchy">
                <span class="product-image"><label @click="router.push({name: 'product', params: {prodId: filteredData.id}})"><img :src="filteredData.image" width="300" height="300" /></label></span>  
                <span class="product-data data">
                    <div><span class="text">Наименование:</span> {{ filteredData.title }}</div>
                    <div><span class="text">Цена:</span> {{ filteredData.price }} ₽</div>
                    <div><span class="text">Описание:</span> {{ filteredData.description }}</div>
                    <div><span class="text">Категория:</span> {{ filteredData.category }}</div>
                    <div><span class="text">Рейтинг:</span> {{ filteredData.rating.rate }}</div>
                    <div><span class="text">Количество проголосовавших:</span> {{ filteredData.rating.count }}</div>
                </span> 
                <div class="main2" v-if="cartStore.inCart(filteredData.id)"><label @click="cartStore.delCart(filteredData.id)">Удалить из корзины</label></div>
                <div class="main"><label @click="cartStore.addCart(filteredData)">{{ cartStore.buttonName(filteredData.id) }}</label></div>
            </div>
        </li>
    </ul> 
</template>

<script setup>
    import { useRouter } from 'vue-router';
    import { useProductsStore } from '../stores/products';
    import { useCartStore } from '../stores/cart';

    const productStore = useProductsStore()
    const cartStore = useCartStore()

    const router = useRouter()
</script>

<style scoped>
  .text {
    font-weight: 700;
    color: #987D93;
  }

  .list {
    margin-bottom: 40px;
    list-style: none;
  }

  .product {
    width: 90%;
    display: flex;
  }

  .product-image {
    float: left;
    width: 0%;
  }

  .product-data {
    margin-left: 35%;
    text-align: left;
    display:inline-block;
  }

  .sketchy {
      padding: 4rem 8rem;
      display: inline-block;
      border: 3px solid #333333;
      font-size: 1.0rem;
      border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
      text-transform: uppercase;
      letter-spacing: 0.3ch;
      background: #ffffff;
      position: relative;
      
      &::before {
          content: '';
          border: 2px solid #353535;
          display: block;
          width: 100%;
          height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
          border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
      }
  }

  .data{
    display:inline-block;
    width:60%;
    border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
    padding:1em;
    line-height:1.5em;
    background:hsla(67, 95%, 95%, 1);
    border:dotted 5px hsla(0, 95%, 35%, 1);
    margin-bottom: 20px;
  }

  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500&display=swap");
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  width: 300px;
  height: 50px;
  font-weight: bold;
  font-size: 15px;
  font-family: "Josefin Sans", sans-serif;
  background-color: #fdcb6e;
  cursor: pointer;
  box-shadow: 5px 5px 0 0;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20px;
  float: right;
  margin: 5px;
}

.main2 {
  width: 240px;
  height: 50px;
  font-weight: bold;
  font-size: 15px;
  font-family: "Josefin Sans", sans-serif;
  background-color: #fdcb6e;
  cursor: pointer;
  box-shadow: 5px 5px 0 0;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 20px;
  float: right;
  margin: 5px;
}

label {
  position: absolute;
  text-decoration: none;
  color: #000;
  z-index: 1000;
}
.main::after {
  content: "";
  top: 0;
  left: 0;
  width: 300px;
  height: 50px;
  background: linear-gradient(to right, #ff7675, #e84393);
  opacity: 0;
  transition: 0.3s;
}
.main:hover {
  box-shadow: -5px -5px 0 0;
  transform: scale(0.9);
}
.main:hover::after {
  opacity: 1;
}

.main2::after {
  content: "";
  top: 0;
  left: 0;
  width: 240px;
  height: 50px;
  background: linear-gradient(to right, #ff7675, #e84393);
  opacity: 0;
  transition: 0.3s;
}
.main2:hover {
  box-shadow: -5px -5px 0 0;
  transform: scale(0.9);
}
.main2:hover::after {
  opacity: 1;
}
</style>