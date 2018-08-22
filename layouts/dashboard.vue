<template>
    <v-app v-resize="onResize">
        <v-navigation-drawer v-model="drawer" fixed app>
            <v-list dense>
                <v-subheader>
                    Удирдлага
                </v-subheader>
                <v-list-tile v-for="(item, i) in items" :key="`items${i}`" :to="item.to" nuxt exact>
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-subheader>
                    Тохиргоо
                </v-subheader>
                <v-list-tile v-for="(item, i) in settings" :key="`settings${i}`" :to="item.to" nuxt exact>
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="white" height="55" fixed flat app>
            <v-toolbar-side-icon @click="toggleDrawer()"></v-toolbar-side-icon>
            <v-btn flat color="primary" to="/s">
                Сайт руу очих
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn flat color="pink" @click="logout()">
                Гарах
            </v-btn>
        </v-toolbar>
        <v-content>
            <nuxt />
        </v-content>
    </v-app>
</template>

<script>
export default {
    middleware: 'authenticated',
    data() {
        return {
            drawer: true,
            items: [
                { icon: 'home', title: 'Нүүр', to: '/' },
                { icon: 'person', title: 'Хэрэглэгч', to: '/users' }
            ],
            settings: [
                //
            ]
        }
    },
    created() {
        this.onResize()
    },
    methods: {
        onResize() {
            if (process.browser) {
                const isMobile = window.innerWidth < 600
                this.$store.commit('isMobile', isMobile)
            }
        },
        toggleDrawer() {
            this.drawer = !this.drawer
        },
        async logout() {
            await this.$auth.logout()
            this.$router.push('/login')
        }
    }
}
</script>
