block('header').content()(function() {
    return [
        {
            elem: 'side',
            elemMods: { align: 'left' },
            content: [
                {
                    block : 'logo'
                },
                {
                    block : 'form'
                }

            ]
        },
        {
            elem: 'side',
            elemMods: { align: 'right' },
            content: [

             /* some block */

            ]
        }

    ];
});
