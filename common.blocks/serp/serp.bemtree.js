block('serp').content()(function() {
    var posts = this.data.posts || [];

    return [
        {
            elem: 'content',
            content: posts.map(function(post) {
                return {
                    block: 'lost',
                    elem: 'item',
                    content: {
                        block: 'post',
                        message: post.message,
                        service: post.service
                    }
                };
            })
        },
        {
            block: 'scroll-btn',
            mods: {'scroll': true, 'at-start': true }
        }
    ];
});
