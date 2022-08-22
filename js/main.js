var app = new Vue ({
    el: '#app',
    data: {
        arrayEmail: null
    },

    mounted() {
        for (let i = 0; i < 10; i ++) {
            axios.get ('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(email =>{
                this.arrayEmail = email.data.response;
            })
        }
    }
})