import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', () => {
    const userData = ref({})
    
    function login() {
        if (window.localStorage.getItem('login') === null) {
          return 'Войти'
        } else {
          return window.localStorage.getItem('login') + '(Выйти)'
        }
      }

    function save(pLogin, pEmail, pSurname, pName, pMiddlename, pAddress, pZip, pCard_name, pCard_num, pCard_date, pCard_cvv) {
        const data = {email: pEmail,
                      surname: pSurname,
                      name: pName,
                      middlename: pMiddlename,
                      address: pAddress,
                      zip: pZip,
                      card_name: pCard_name,
                      card_num: pCard_num,
                      card_date: pCard_date,
                      card_cvv: pCard_cvv}
        userData.value[pLogin] = data;
    }

    function getUserData(pLogin) {
        return userData.value[pLogin];
    }

    return { login, userData, save, getUserData }
})