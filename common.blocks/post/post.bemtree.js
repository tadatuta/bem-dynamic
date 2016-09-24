block('post').content()(function() {
	return [
        {
            elem: 'header',
            content: [
                {
                    block: 'user',
                    url: 'https://ru.bem.info',
                    name: 'Ivan',
                    time: '10 h',
                    avatar: 'https://raw.githubusercontent.com/bem/bem-identity/master/sign/_theme/sign_theme_captain-america.png'
                }
            ]
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