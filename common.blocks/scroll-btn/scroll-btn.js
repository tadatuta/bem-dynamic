modules.define('scroll-btn', ['i-bem__dom'], function (provide, BEMDOM) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
					
					var btn = this;
					
					// вызываем setTimeout со случайной задержкой и установим модификатор show по ее истечению
					setTimeout(function() { btn.setMod('enabled', true); }, 3E3);	
					
                }
            }
        },


    }));
});