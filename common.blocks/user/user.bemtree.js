block('user').content()(function() {
	var ctx = this.ctx;

	return [
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

    ];
});