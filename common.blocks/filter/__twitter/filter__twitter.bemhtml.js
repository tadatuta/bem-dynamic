block('filter').elem('twitter')(
    tag()('label'),
    attrs()(function() {
        return {
            'for': this.ctx.for
        };
    })
);
