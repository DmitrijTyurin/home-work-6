import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";


export const useProductsStore = defineStore('products', () => {
    const productDatas = ref ([])

    function getProductData() {
    axios
        .get("https://fakestoreapi.com/products")
        .then(response => (productDatas.value = response.data));
    }
    
    const filter = ref ({sName: '', sPriceFrom: null, sPriceTo: null})

    const filteredDatas = computed(() => {
        if (filter.value.sName !== '' || (filter.value.sPriceFrom !== null & filter.value.sPriceFrom !== '') || (filter.value.sPriceTo !== null & filter.value.sPriceTo !== ''))
        return productDatas.value.filter((productData) => 
                (filter.value.sName === '' || (filter.value.sName !== '' & productData.title.toLowerCase().includes(filter.value.sName.toLowerCase()))) &
                (filter.value.sPriceFrom === null || (filter.value.sPriceFrom !== null & productData.price >= filter.value.sPriceFrom)) &
                (filter.value.sPriceTo === null || (filter.value.sPriceTo !== null & productData.price <= filter.value.sPriceTo))
            )
        return productDatas.value
    })

    function setFilter(name, priceFrom, priceTo) {
        filter.value = {sName: name, sPriceFrom: priceFrom, sPriceTo: priceTo}
    }

    const prodId = computed(() => productDatas.value.length)

    function add(prodName, prodPrice, prodDescr, prodCtgr, prodLink, prodRating, prodCount) {
        productDatas.value.push({id: prodId.value + 1,
                                 title: prodName,
                                 price: prodPrice,
                                 description: prodDescr,
                                 category: prodCtgr,
                                 image: prodLink,
                                 rating: {rate: prodRating, count: prodCount}})
        }

    return {productDatas, getProductData, filter, filteredDatas, setFilter, prodId, add}
})