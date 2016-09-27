block('header').elem('search-form').replace()(function() {
    return {
        block: 'form',
        mix: { block: this.block, elem: this.elem },
        content: [
            {
                block: 'control-group',
                content: [
                    {
                        block: 'input',
                        mix: { block: this.block, elem: 'search-input' },
                        mods: { theme: 'islands', size: 'l', 'has-clear': true, type: 'search' },
                        name: 'query',
                        placeholder: '#bem'
                    },
                    {
                        block: 'button',
                        mods: { theme: 'islands', size: 'l', type: 'submit' },
                        text: 'Find'
                    }
                ]
            },
            {
                block: this.block,
                elem: 'filter',
                content: [
                    {
                        name: 'instagram',
                        title: 'Instagram'
                    },
                    {
                        name: 'twitter',
                        title: 'Twitter'
                    }
                ].map(item => ({
                    block: 'toggle',
                    mods: { type: item.name },
                    text: item.title
                }))
            },
            {
                block: 'spin',
                mods: { theme: 'islands', size: 's', visible: true }
            }
        ]
    };
});

