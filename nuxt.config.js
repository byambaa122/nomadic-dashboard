module.exports = {
    head: {
        title: 'Nomadic',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Connecting travellers with local travel agents' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
        ]
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],
    plugins: [
        '~/plugins/vuetify.js',
        '~/plugins/axios.js'
    ],
    axios: {
        baseURL: 'http://localhost:3000/api'
    },
    auth: {
        strategies: {
            local: {
                endpoints: {
                    user: { url: '/user', method: 'get', propertyName: 'user' },
                    login: { url: '/login', method: 'post', propertyName: 'token' },
                    logout: false
                }
            }
        }
    },
    css: [
        '~/assets/style/app.styl'
    ],
    loading: { color: '#3b8070' },
    build: {
        vendor: [
            '~/plugins/vuetify.js'
        ],
        extractCSS: true,
        /*
        ** Run ESLint on save
        */
        extend(config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
