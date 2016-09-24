({
    mustDeps : [
        { block : 'font', mods : { face : 'myriad-text'} },
    ],
    shouldDeps: [
        {
            mods: { view: ['404'], theme: ['art']}
        },
        'header',
        'result'
    ]
})
