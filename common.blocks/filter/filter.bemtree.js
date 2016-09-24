block('filter').content()(function() {
    return [
        {
            elem : 'content',
            content : [
                {
                    tag : 'ul',
                    content: [
                        {
                            name: 'instagram',
                            title: 'Instagram'
                        },
                        {
                            name: 'twitter',
                            title: 'Twitter'
                        }
                    ].map(item => [
                        {
                            elem: 'item',
                            content: [
                                {
                                    tag : 'p',
                                    content: item.title
                                },
                                {
                                    tag : 'input',
                                    attrs : { id : item.name, type : 'checkbox', hidden : 'hidden' },

                                },
                                {
                                    elem: item.name,
                                    'for': item.name
                                }
                            ]
                        }
                    ])
                }
            ]
        }
    ];
});
