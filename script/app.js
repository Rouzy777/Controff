new Vue({
    el: '#app',
    methods: {
        login: function() {
            if(Cookies.get('user') != undefined) {
                window.location.href = '/LK.html'
            } else {
                $('.modal').modal('toggle')
            }
        },
        signin: function() {
            let dataClient = {
                "userName": this.$refs.login.value,
                "pass": this.$refs.pass.value
            };
            axios.post("ajax.php", JSON.stringify(dataClient)).then(response => {
                if(response.data == "Да" || response.data == "Yes") {
                    Cookies.set('user', dataClient.userName, { expires: 365, secure: true });
                    Cookies.set('pass', dataClient.pass, { expires: 365, secure: true  });
                    
                    window.location.href = '/LK.html'
                } else {
                    alert('Неверный логин или пароль');
                    this.$refs.login.value = '', this.$refs.pass.value = '';
                    $('.modal').modal('toggle');
                }
            })
            .catch(error => {
                console.log(error)
            });
        },
        sendmail: function() {
            let data = {
                tel: this.$refs.phone.value,
                text: this.$refs.name.value,
                sendmail: true
            };
            if(data.tel != '' && data.text != '') {
                axios.post("ajax.php", JSON.stringify(data)).then(response => {
                    if(response.data == "Да" || response.data == "Yes") {
                        $('.contact-before-block').fadeOut('slow');
                        $('.contact-after-block').hide();
                        $('.contact-after-block').removeClass('d-none');
                        function showNext() {
                            $('.contact-after-block').fadeIn('slow');
                        };
                        setTimeout(showNext, 1000);
                    }
                })
            } else {
                alert('Введите имя и номер телефона');
            }
        }
    }
});