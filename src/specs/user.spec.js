import * as userStore from '../stores/user.js';
import { setActivePinia, createPinia } from 'pinia';
import { useUserStore } from '../stores/user'

describe('User store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    });
    
    it('User imports without error', () => {
        expect(userStore).toBeDefined();
        expect(userStore).toHaveProperty('useUserStore');
    });

    it('Without login', () => {
        const user = useUserStore();
        expect(user.login()).toBe('Войти');
    });

    it('With login', () => {
        const user = useUserStore();
        window.localStorage.setItem('login', 'Dima');
        expect(user.login()).toBe('Dima(Выйти)');
    });

    it('Save user', () => {
        const user = useUserStore();
        const data = {email: 'my email',
                      surname: 'my surname',
                      name: 'my name',
                      middlename: 'my middlename',
                      address: 'my address',
                      zip: 'my zip',
                      card_name: 'my card_name',
                      card_num: 'my card_num',
                      card_date: 'my card_date',
                      card_cvv: 'my card_cvv'};
        user.save('Dima','my email','my surname','my name','my middlename','my address','my zip','my card_name','my card_num','my card_date','my card_cvv');
        expect(user.getUserData('Dima')).toStrictEqual(data);
    });
});