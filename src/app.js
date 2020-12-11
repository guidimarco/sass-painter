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
                        {
                            name: 'corel painter',
                            href: '#',
                        },
                        {
                            name: 'particle shop',
                            href: '#',
                        },
                        {
                            name: 'painter essentials',
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
                            name: 'all products',
                            href: '#',
                        },
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
                        {
                            name: 'register your product',
                            href: '#',
                        },
                        {
                            name: 'patches & updates',
                            href: '#',
                        },
                        {
                            name: 'knowledgebase',
                            href: '#',
                        },
                        {
                            name: 'uninstall instructions',
                            href: '#',
                        },
                        {
                            name: 'contact us',
                            href: '#',
                        },
                    ],
                },
                {
                    name: 'learning',
                    href: '#',
                    submenu: [

                    ],
                },
            ], // main-menu        
            'footer' : {
                'quick links': [
                    {
                        name: 'licensing',
                        href: '#',
                    },
                    {
                        name: 'tutorials & tips',
                        href: '#',
                    },
                    {
                        name: 'webinars',
                        href: '#',
                    },
                    {
                        name: 'the painter factory',
                        href: '#',
                    },
                    {
                        name: 'discovery center',
                        href: '#',
                    },
                    {
                        name: 'beta programs',
                        href: '#',
                    },
                ],
                'about' : [
                    {
                        name: 'company information',
                        href: '#',
                    },
                    {
                        name: 'newsroom',
                        href: '#',
                    },
                    {
                        name: 'careers',
                        href: '#',
                    },
                    {
                        name: 'partner program',
                        href: '#',
                    },
                    {
                        name: 'legal information',
                        href: '#',
                    },
                    {
                        name: 'eula',
                        href: '#',
                    },
                ],
                'partners': [
                    {
                        name: 'corel advantage',
                        href: '#',
                        img: 'https://www.painterartist.com/static/ptr/corelAdvantage.png',
                    },
                    {
                        name: 'accredited business',
                        href: '#',
                        img: 'https://www.painterartist.com/static/common/images/logo-bbb.png',
                    },
                    {
                        name: 'mcafee secure',
                        href: '#',
                        img: 'http://cdn.ywxi.net/meter/www.coreldraw.com/101.gif',
                    },
                ],
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
                ],
            }
        }, // end all menu
    },
    methods: {

    },
    mounted: function() {
        console.log("ciao");
    },
});
