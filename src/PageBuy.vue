<template> 
    <main>
        <form @submit="onSubmit">
            <h2>Оформление заказа</h2>
            <h4>Выбранный товар</h4>
            <div>
                <li v-css:list-style="'none'" v-for="productData in cartStore.cart">
                    <div v-if="productData.quantity > 0">
                        <div class="ileft" v-css:display="'inline-block'"><img :src="productData.data.image" width="50" height="50" /></div>
                        <div class="icenter" v-css:display="'inline-block'"></div>
                        <div class="iright" v-css:display="'inline-block'">
                            <div class="margin">
                                <div class="ileft" v-css:display="'inline-block'"></div>
                                <div class="iright mleft" v-css:display="'inline-block'">{{ productData.data.title }}</div>
                                <div class="icenter" v-css:display="'inline-block'"></div>
                                <div class="iclear"></div>
                            </div>
                            <div class="margin">
                                <div class="ileft" v-css:display="'inline-block'"></div>
                                <div class="iright" v-css:display="'inline-block'" v-css:color="'red'"><label>{{ productData.quantity }}</label> шт - <label>{{ productData.data.price * productData.quantity }}</label> ₽</div>
                                <div class="icenter" v-css:display="'inline-block'"></div>
                                <div class="iclear"></div>
                            </div>
                        </div>
                        <div class="iclear"></div>
                    </div>
                </li>
            </div>
            <hr>
            <h4>Данные покупателя</h4>
            <div>
                <div class="margin">
                    <div class="ileft"><label>Фамилия: </label></div>
                    <div class="iright"><small v-css:color="'red'">{{ errors.surname }}</small><input name="surname" v-model="surname" type="text" class="mleft" placeholder="Иванов"></div>
                    <div class="icenter"></div>
                    <div class="iclear"></div>
                </div>

                <div class="margin">
                    <div class="ileft"><label>Имя: </label></div>
                    <div class="iright"><small v-css:color="'red'">{{ errors.name }}</small><input name="name" v-model="name" type="text" class="mleft" placeholder="Иван"></div>
                    <div class="icenter"></div>
                    <div class="iclear"></div>
                </div>

                <div class="margin">
                    <div class="ileft"><label>Отчество: </label></div>
                    <div class="iright"><small v-css:color="'red'">{{ errors.middlename }}</small><input name="middlename" v-model="middlename" type="text" class="mleft" placeholder="Иванович"></div>
                    <div class="icenter"></div>
                    <div class="iclear"></div>
                </div>

                <div class="margin">
                    <div class="ileft"><label>Email: </label></div>
                    <div class="iright"><small v-css:color="'red'">{{ errors.email }}</small><input name="email" v-model="email" type="email" class="mleft" placeholder="you@example.com"></div>
                    <div class="icenter"></div>
                    <div class="iclear"></div>
                </div>

                <div class="margin">
                    <div class="ileft"><label>Адрес: </label></div>
                    <div class="iright"><small v-css:color="'red'">{{ errors.address }}</small><input name="address" v-model="address" type="text" class="mleft" placeholder="Город,Улица,Номер"></div>
                    <div class="icenter"></div>
                    <div class="iclear"></div>
                </div>

                <div class="margin">
                    <div class="ileft"><label>Почтовый индекс: </label></div>
                    <div class="iright"><small v-css:color="'red'">{{ errors.zip }}</small><input name="zip" v-model="zip" type="text" class="mleft" placeholder="353200"></div>
                    <div class="icenter"></div>
                    <div class="iclear"></div>
                </div>
            </div>
            <hr>
            <h4>Доставка</h4>
            <div>
                <div class="ileft margin">
                    <input type="radio" value="address" v-model="radio">
                    <label>Доставить по указанному адресу</label>
                </div>
                <div class="iright"></div>
                <div class="icenter"></div>
                <div class="iclear"></div>

                <div class="ileft margin">
                    <input type="radio" value="post" v-model="radio">
                    <label>Доставить в отделение почты</label>
                </div>
                <div class="iright"></div>
                <div class="icenter"></div>
                <div class="iclear"></div>
            </div>
            <hr>
            <h4>Данные для оплаты</h4>
            <div>
                <div class="margin">
                    <div class="ileft"><label>Имя: </label></div>
                    <div class="iright"><small v-css:color="'red'">{{ errors.card_name }}</small><input name="card_name" v-model="card_name" type="text" class="mleft" placeholder="IVANOV IVAN"></div>
                    <div class="icenter"></div>
                    <div class="iclear"></div>
                </div>

                <div class="margin">
                    <div class="ileft"><label>Номер карты: </label></div>
                    <div class="iright"><small v-css:color="'red'">{{ errors.card_num }}</small><input name="card_num" v-model="card_num" type="text" class="mleft" placeholder="#### #### #### ####"></div>
                    <div class="icenter"></div>
                    <div class="iclear"></div>
                </div>

                <div class="margin">
                    <div class="ileft"><label>Дата: </label></div>
                    <div class="iright"><small v-css:color="'red'">{{ errors.card_date }}</small><input name="card_date" v-model="card_date" type="text" class="mleft" placeholder="##/##"></div>
                    <div class="icenter"></div>
                    <div class="iclear"></div>
                </div>

                <div class="margin">
                    <div class="ileft"><label>CVV: </label></div>
                    <div class="iright"><small v-css:color="'red'">{{ errors.card_cvv }}</small><input name="card_cvv" v-model="card_cvv" type="text" class="mleft" placeholder="###"></div>
                    <div class="icenter"></div>
                    <div class="iclear"></div>
                </div>
            </div>
            <hr>
            <div>
                <div class="ileft margin">
                    <input type="checkbox" value="rule" v-model="checkbox">
                    <label>Я согласен с правилами обработки персональных данных</label>
                </div>
                <div class="iright"></div>
                <div class="icenter"></div>
                <div class="iclear"></div>
            </div>
            <hr>
            <button>Завершить покупку</button>
        </form>
    </main>
</template>

<script setup>
    import {ref} from "vue";
    import { useField, useForm } from 'vee-validate';
    import { toTypedSchema } from '@vee-validate/zod';
    import * as zod from 'zod';
    import axios from "axios";
    import { useRouter } from "vue-router";
    import { useCartStore } from "./stores/cart";
    import { useUserStore } from "./stores/user";

    const login = ref(window.localStorage.getItem('login'))

    const router = useRouter()
    
    const cartStore = useCartStore()
    const userStore = useUserStore()

    const radio = ref('address')
    const checkbox = ref(false)

    if (typeof userStore.getUserData(login.value) === "undefined") {
        userStore.save(login.value, '', '', '', '' ,'', '', '', '', '', '')
    }

    const userData = userStore.getUserData(login.value)

    const validationSchema = toTypedSchema(
        zod.object({
            email: zod.string().min(1, { message: 'Поле обязательно к заполнению' }).email({ message: 'Должен быть действительный адрес электронной почты' }).default(userData.email),
            surname: zod.string().min(1, { message: 'Поле обязательно к заполнению' }).refine((value) => /^[А-Я][а-я]+$/.test(value ?? ""), 'Введена некорректная фамилия').default(userData.surname),
            name: zod.string().min(1, { message: 'Поле обязательно к заполнению' }).refine((value) => /^[А-Я][а-я]+$/.test(value ?? ""), 'Введено некорректное имя').default(userData.name),
            middlename: zod.string().min(1, { message: 'Поле обязательно к заполнению' }).refine((value) => /^[А-Я][а-я]+$/.test(value ?? ""), 'Введено некорректное отчество').default(userData.middlename),
            address: zod.string().min(1, { message: 'Поле обязательно к заполнению' }).refine((value) => /^[а-яА-Я]+[,][а-яА-Я]+[,][0-9]+$/.test(value ?? ""), 'Введен некорректный адрес').default(userData.address),
            zip: zod.string().min(1, { message: 'Поле обязательно к заполнению' }).refine((value) => /^[0-9]{6}$/.test(value ?? ""), 'Поле должно содержать 6 цифр').default(userData.zip),
            card_name: zod.string().min(1, { message: 'Поле обязательно к заполнению' }).refine((value) => /^[A-Z]+ [A-Z]+$/.test(value ?? ""), 'Введено некорректное имя карты').default(userData.card_name),
            card_num: zod.string().min(1, { message: 'Поле обязательно к заполнению' }).refine((value) => /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/.test(value ?? ""), 'Введен некорректный номер карты').default(userData.card_num),
            card_date: zod.string().min(1, { message: 'Поле обязательно к заполнению' }).refine((value) => /^[0-9]{2}\/[0-9]{2}$/.test(value ?? ""), 'Введена некорректная дата карты').default(userData.card_date),
            card_cvv: zod.string().min(1, { message: 'Поле обязательно к заполнению' }).refine((value) => /^[0-9]{3}$/.test(value ?? ""), 'Введен некорректный код карты').default(userData.card_cvv)
        })
    );

    const { handleSubmit, errors } = useForm({
        validationSchema
    });

    const { value: email } = useField('email');
    const { value: surname } = useField('surname');
    const { value: name } = useField('name');
    const { value: middlename } = useField('middlename');
    const { value: address } = useField('address');
    const { value: zip } = useField('zip');
    const { value: card_name } = useField('card_name');
    const { value: card_num } = useField('card_num');
    const { value: card_date } = useField('card_date');
    const { value: card_cvv } = useField('card_cvv');

    const onSubmit = handleSubmit(values => {
        if (checkbox.value === false)
            alert('Необходимо дать согласие на обработку персональных данных');
        else {
            axios
                .post("https://httpbin.org/anything", JSON.stringify(values, null, 2))
                .then(function (response) { 
                    alert('Заказ успешно оформлен');
                    cartStore.clearCart();
                    userStore.save(login.value, email.value, surname.value, name.value, middlename.value, address.value, zip.value, card_name.value, card_num.value, card_date.value, card_cvv.value);
                    router.push({name: 'main'})
                })
                .catch(function (error) { alert(error); });
            }
        }
    );
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