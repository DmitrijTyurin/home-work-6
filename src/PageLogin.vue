<template>
    <form @submit="onSubmit" v-css:width="'450px'" v-css:margin="'0 auto'">
        <h2>Авторизация</h2>
        <div>
            <div class="margin">
                <div class="ileft"><label>Логин: </label></div>
                <div class="iright"><input name="login" v-model="login" type="text" class="mleft" placeholder="login"></div>
                <div class="icenter"><small v-css:color="'red'">{{ errors.login }}</small></div>
                <div class="iclear"></div>
            </div>

            <div class="margin">
                <div class="ileft"><label>Пароль: </label></div>
                <div class="iright"><input name="password" v-model="password" type="password" class="mleft" placeholder="password"></div>
                <div class="icenter"><small v-css:color="'red'">{{ errors.password }}</small></div>
                <div class="iclear"></div>
            </div>
        </div>
        <hr>
        <button>Войти</button>
    </form>
</template>

<script setup>
    import { useField, useForm } from 'vee-validate';
    import { toTypedSchema } from '@vee-validate/zod';
    import * as zod from 'zod';
    import { useRouter } from 'vue-router';
    import { onBeforeMount } from 'vue';
    import { useUserStore } from './stores/user';

    const userStore = useUserStore()

    const validationSchema = toTypedSchema(
        zod.object({
            login: zod.string().min(4, { message: 'Длина не менее 4 символов' }).refine((value) => /^[a-zA-Z]+$/.test(value ?? ""), 'Только латинские буквы').default(''),
            password: zod.string().min(8, { message: 'Длина не менее 8 символов' }).default('')
        })
    );

    const { handleSubmit, errors } = useForm({
        validationSchema
    });

    const { value: login } = useField('login');
    const { value: password } = useField('password');

    const router = useRouter()

    const onSubmit = handleSubmit(values => {
        window.localStorage.setItem('login', login.value)
        router.push({name: 'main'})
    });

    onBeforeMount(() => {
        if (window.localStorage.getItem('login') !== null) {
            window.localStorage.removeItem('login')
            router.push({name: 'main'})
        }
    })
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