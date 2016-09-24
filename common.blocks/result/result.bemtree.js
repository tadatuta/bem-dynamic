block('result').content()(function() {
    var posts = this.data.posts || [];

    return [
        {
            block: 'lost',
            tag: 'section',
            content: posts.map(function(post) {
                return {
                    elem: 'item',
                    content: [
                        {
                            block: 'post',
                            message: post.message,
                            service: post.service
                        }
                    ]
                };
            })
        },
        {
            block : 'scroll-btn',
            mods : {'scroll': true, 'at-start': true }
        }
    ];
});
