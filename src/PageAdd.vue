<template>
    <div v-css:width="'450px'" v-css:margin="'0 auto'">
        <h4>Информация о товаре</h4>
        <div class="margin">
            <div class="ileft"><label>Наименование:</label></div>
            <div class="iright"><input type="text" class="mleft" v-model="prodName" /></div>
            <div class="icenter"></div>
            <div class="iclear"></div>
        </div>
        <div class="margin">
            <div class="ileft"><label>Цена:</label></div>
            <div class="iright"><input type="number" class="mleft" v-model="prodPrice" /></div>
            <div class="icenter"></div>
            <div class="iclear"></div>
        </div>
        <div class="margin">
            <div class="ileft"><label>Описание:</label></div>
            <div class="iright"><textarea class="mleft" v-model="prodDescr"></textarea></div>
            <div class="icenter"></div>
            <div class="iclear"></div>
        </div>
        <div class="margin">
            <div class="ileft"><label>Категория:</label></div>
            <div class="iright"><input type="text" class="mleft" v-model="prodCtgr" /></div>
            <div class="icenter"></div>
            <div class="iclear"></div>
        </div>
        <div class="margin">
            <div class="ileft"><label>Рейтинг:</label></div>
            <div class="iright"><input type="number" class="mleft" v-model="prodRating" /></div>
            <div class="icenter"></div>
            <div class="iclear"></div>
        </div>
        <div class="margin">
            <div class="ileft"><label>Количество проголосовавших:</label></div>
            <div class="iright"><input type="number" class="mleft" v-model="prodCount" /></div>
            <div class="icenter"></div>
            <div class="iclear"></div>
        </div>
        <div class="margin">
            <div class="ileft"><label>Ссылка на изображение:</label></div>
            <div class="iright"><input type="text" class="mleft" v-model="prodLink" /></div>
            <div class="icenter"></div>
            <div class="iclear"></div>
        </div>
        <button @click="add()">Добавить</button>
        <hr>
        <h4>Добавленные товары</h4>
        <div>
            <li v-css:list-style="'none'" v-for="productData in productStore.productDatas">
                <div v-if="productData.id >= minId && minId !== null">
                    <div class="ileft" v-css:display="'inline-block'"><img :src="productData.image" width="50" height="50" /></div>
                    <div class="icenter" v-css:display="'inline-block'"></div>
                    <div class="iright" v-css:display="'inline-block'">
                        <div class="margin">
                            <div class="ileft" v-css:display="'inline-block'"></div>
                            <div class="iright mleft" v-css:display="'inline-block'">{{ productData.title }}</div>
                            <div class="icenter" v-css:display="'inline-block'"></div>
                            <div class="iclear"></div>
                        </div>
                        <div class="margin">
                            <div class="ileft" v-css:display="'inline-block'"></div>
                            <div class="iright" v-css:display="'inline-block'" v-css:color="'red'">{{ productData.price }}</div>
                            <div class="icenter" v-css:display="'inline-block'"></div>
                            <div class="iclear"></div>
                        </div>
                    </div>
                    <div class="iclear"></div>
                </div>
            </li>
        </div>
    </div>
</template>

<script setup>
    import {ref} from "vue";
    import { useProductsStore } from "./stores/products";
    
    const productStore = useProductsStore()

    const prodName = ref('')
    const prodPrice = ref(null)
    const prodDescr = ref('')
    const prodCtgr = ref('')
    const prodRating = ref(null)
    const prodCount = ref(null)
    const prodLink = ref('')
    const minId = ref(null)

    function add() {
        if (prodName !== '') {
            if (minId.value === null) minId.value = productStore.prodId + 1;
            productStore.add(prodName.value, prodPrice.value, prodDescr.value, prodCtgr.value, prodLink.value, prodRating.value, prodCount.value);
        }
    }
</script>

<style scoped>
    div {
        display: block;
    }

    .ileft {
        float: left;
    }

    .iright {
        float: right;
    }

    .icenter {
        text-align: center; 
        margin: 0 auto;
    }

    .iclear {
        clear: both;
    }

    .margin {
        margin: 5px;
    }

    .mleft {
        margin-left: 10px;
    }
</style>