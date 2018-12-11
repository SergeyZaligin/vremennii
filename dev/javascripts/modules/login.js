(global => {
    'use strict';

    /**
     * Object App
     * 
     * @type object |global.App
     */
    const App = global.App || {};

    /**
     * Constructor handler form signup
     * 
     * @param {Object} selector
     * @returns {registrationL#1.FormHandler}
     */
    function LoginHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        } else {
            this.selector = document.querySelector(selector);
        }
    }

    LoginHandler.prototype.init = function () {
        if (this.selector) {

            ('#login-form').addEventListener('click', e => {
                e.preventDefault();
                // const formEntries = new FormData(this.selector).entries();
                // const dataForm = JSON.stringify(Object.assign(...Array.from(formEntries, ([x, y]) => ({
                //     [x]: y
                // }))));
                var str = $( this.selector).serialize();
                $.ajax({
                    type: "POST",
                    url: '/auth/login',
                    data: str,
                    dataType: 'json',
                    success: function (res) {
                        console.log(res);
                    },
                    error: function () {
                        console.error("Возникла ошибка!");
                    }
                  });

                // fetch('/auth/login', {
                //     method: "post",
                //     headers: {
                //         "Accept": 'application/json, text/plain, */*',
                //         "Content-Type": "application/json"
                //     },
                //     body: dataForm
                // }).then(function (res) {
                //     return res.json();
                // }).then(function (data) {
                //     //const msg = document.querySelector('.message');

                //     //msg.innerHTML = data.message;
                //     // data.message.forEach(function (item, i) {
                //     //     let newLi = document.createElement('li');
                //     //     newLi.innerHTML = `<li>${i}. ${item}</li>`;
                //     //     msg.appendChild(newLi);
                //     // });
                //     //window.location = "/auth/registration";
                //     console.log(data);
                // });

            });
        } else {
            return false;
        }


    };

    App.LoginHandler = LoginHandler;
    global.App = App;

})(window);