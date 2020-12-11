import Vue from 'vue';
var app = new Vue({
    el: "#root",
    data: {

        menu: {
            'user': [
                {
                    name: '1-877-582-6735',
                    href: '#',
                    icon: 'phone',
                },
                {
                    name: 'chat',
                    href: '#',
                    icon: 'comment-alt',
                },
                {
                    name: 'sign in',
                    href: '#',
                    icon: 'user',
                },
                {
                    name: 'cart',
                    href: '#',
                    icon: 'shopping-cart',
                },
            ], // user-menu (sign-in and contact)
            'main': [
                {
                    name: 'products',
                    href: '#',
                    submenu: [

                    ],
                },
                {
                    name: 'brushes',
                    href: '#',
                    submenu: [

                    ],
                },
                {
                    name: 'walcom tablets',
                    href: '#',
                },
                {
                    name: 'special offers',
                    href: '#',
                },
                {
                    name: 'free trials',
                    href: '#',
                },
                {
                    name: 'business',
                    href: '#',
                },
                {
                    name: 'support',
                    href: '#',
                    submenu: [

                    ],
                },
                {
                    name: 'learning',
                    href: '#',
                    submenu: [

                    ],
                },
            ], // main-menu
            'legal': [
                {
                    name: 'terms of use',
                    href: '#',
                },
                {
                    name: 'privacy',
                    href: '#',
                },
                {
                    name: 'cookies',
                    href: '#',
                },
            ], // legal-menu
        }, // end all menu
    },
    methods: {

    },
    mounted: function() {
        console.log("ciao");
    },
});
