var routes = {},
    defaultRoute = 'login';
routes['login'] = {
    url: '#/',
    templateUrl: 'LoginView.html'
    
};

routes['otp'] = {
    url: '#/otp',
    templateUrl: 'OtpView.html'
};

routes['dashboard'] = {
    url: '#/dashboard',
    templateUrl: 'DashboardView.html'
};

routes['addinvoice'] = {
    url: '#/addinvoice',
    templateUrl: 'AddInvoiceView.html'
};

routes['showinvoices'] = {
    url: '#/showinvoices',
    templateUrl: 'ShowInvoicesView.html'
};

$.router
    .setData(routes)
    .setDefault(defaultRoute);
    
$.when($.ready)
    .then(function () {
        $.router.run('.my-view', 'login');
    });
