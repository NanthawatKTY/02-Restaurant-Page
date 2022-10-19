// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/styles/main.scss"],
    meta: {
        title: 'Namo Restaurant',
        link: [
             {
                rel: "stylesheet", 
                href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css", 
            }
        ]
    },
    server: {
        port:8080,
    },
    // build: {
    //     postcss: {
    //         postcssOptions: {
    //             plugins: {
    //                 tailwindcss: {},
    //                 autoprefixer: {},
    //             },
    //         },
    //     }
    // },

})
