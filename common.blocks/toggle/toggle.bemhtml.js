block('toggle')(
    content()(function() {
        var ctx = this.ctx;

        return [
            {
                elem: 'lable',
                attrs: { 'for': this.generateId() },
                content: ctx.text
            },
            {
                elem: 'control',
                attrs: {
                    id: this.generateId(),
                    name: ctx.name,
                    type: 'checkbox',
                    hidden: 'hidden'
                },
            },
            {
                elem: 'switcher',
                attrs: { 'for': this.generateId() },
            }
        ];
    }),
    elem('control').tag()('input'),
    elem('lable').tag()('lable'),
    elem('switcher').tag()('lable')
);



