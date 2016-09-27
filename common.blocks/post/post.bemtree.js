block('post').content()(function() {
	return [
        {
            elem: 'header',
            content: [
                {
                    block: 'link',
                    mods: { theme: 'islands' },
                    mix: { block: 'user', elem: 'name' },
                    url: ctx.url,
                    content: ctx.name
                },
                {
                    block: 'post',
                    elem: 'time',
                    content: ctx.time
                },
                {
                    block: 'image',
                    mix: { block: 'user', elem: 'icon' },
                    url: ctx.avatar || 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/_theme/sign_theme_captain-america.png',
                    alt: ctx.name
                }

            ]


            // [
            //     {
            //         block: 'user',
            //         url: 'https://ru.bem.info',
            //         name: 'Ivan',
            //         time: '10 h',
            //         avatar: 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/_theme/sign_theme_captain-america.png'
            //     }
            // ]
        },
        {
            elem: 'text',
            content: this.ctx.message
        },
        {
            elem: 'footer',
            content: [
                {
                    block: 'service',
                    mods: { type: this.ctx.service }
                }
            ]
        }
    ];
});
