global.Vue = require('vue');

Vue.config.debug = true;

new Vue({
	el: 'body',

	data(){
		return {
			progress: 0,
			status: "doesn't start yet",
			error: false,
			direction: false
		};
	},

	components: {
		'loading-bar': require('./vue-loading-bar.vue')
	},

	methods: {
		progressTo(val){
			this.progress = val;
		},

		setToError(bol){
			this.error = bol;
			this.status = "Error";
		},

		changeDirection(direction){
			if(this.progress > 0){
				this.progress = 100;
			}
			this.direction = !this.direction;
		}

	},

	events: {

		/**
		*	Global Loading Callback Event
		*
		*	@event-name loading-bar:{event-name}
		*/

		// Loading Bar on started
		'loading-bar:started': function (){
			console.log('started');
			this.status = "started";
		},

		// Loading Bar on loading
		'loading-bar:loading': function (){
			console.log('loading');
			this.status = "loading";
		},

		// Loading Bar on loaded
		'loading-bar:loaded': function (){
			console.log('loaded');
			this.status = "loaded";
		},

		// Loading Bar on error
		'loading-bar:error': function (){
			console.log('error');
			this.status = "error";
		},


	},

	ready(){
		var self = this;
			self.progress = 10;
			for (var i = 0; i < 30; i++) {
				if(i > 20 && i < 29){
					setTimeout(function () {
						self.progress += 5;
					},50*i);
				}else{
					setTimeout(function () {
						self.progress ++;
					},10*i);
				}
			}
			setTimeout(function () {
				self.progress = 100;
			},1500);
	}

});
