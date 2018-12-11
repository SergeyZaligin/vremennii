(global => {
    'use strict';

    const FORM_SIGNUP_SELECTOR = '#signup-form';
    const FORM_LOGIN_SELECTOR = '#login-form';
    const ARTICLE_CATEGORY_ADD_FORM_SELECTOR = '#article-category-add-form';
    const ARTICLE_CATEGORY_UPDATE_FORM_SELECTOR = '#article-category-update-form';

    /*beginGlobals*/
    const App = global.App;
    /*endGlobals*/

    console.log('App===>', App);

    /*beginCommonFunction*/
    const $ = App.$;
    /*endCommonFunction*/

    /*beginSignupFormHandler*/
    //console.log(global.document.getElementById('signup-form'));
    const SignupHandler = new App.SignupHandler(FORM_SIGNUP_SELECTOR);
    SignupHandler.init();
    /*endSignupFormHandler*/

    /*beginLoginFormHandler*/
    //console.log(global.document.getElementById('login-form'));
    const LoginHandler = new App.LoginHandler(FORM_LOGIN_SELECTOR);
    LoginHandler.init();
    /*endLoginFormHandler*/

    /*beginArticleCategoryHandler*/
    const ArticleCategoryHandler = new App.ArticleCategoryHandler(ARTICLE_CATEGORY_ADD_FORM_SELECTOR);
    ArticleCategoryHandler.init();
    /*endArticleCategoryHandler*/

    /*beginArticleCategoryUpdateHandler*/
    const ArticleCategoryUpdateHandler = new App.ArticleCategoryUpdateHandler(ARTICLE_CATEGORY_UPDATE_FORM_SELECTOR);
    ArticleCategoryUpdateHandler.init();
    /*endArticleCategoryUpdateHandler*/

})(window);