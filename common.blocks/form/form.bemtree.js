block('form').content()(function() {
    return [
        {
            block : 'control-group',
            content : [
                {
                    block : 'input',
                    mix: { block: 'header', elem: 'search-input' },
                    mods : { theme : 'islands', size : 'l', 'has-clear' : true, type : 'search' },
                    name: 'query',
                    val: '',
                    placeholder: 'try me, baby!'
                },
                {
                    block : 'button',
                    mods : { theme : 'islands', size : 'l', type: 'submit' },
                    text : 'Найти'
                }
            ]
        },
        {
            block : 'filter'
        },
        {
            block: 'spin',
            mods: { theme: 'islands', size : 's', visible : true }
        }
    ];
});

