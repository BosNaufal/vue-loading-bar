/*! Copyright (c) 2016 Naufal Rabbani (http://github.com/BosNaufal)
* Licensed Under MIT (http://opensource.org/licenses/MIT)
*
* Version 0.0.1
*
*/

var VueLoadingBar = Vue.extend ({
	template: '<div v-if="show" class="loading-bar to-{{ direction }} {{ full }} {{ class != undefined ? class : \'\' }} {{ error ? \'error\' : \'\' }}" :id="id != undefined ? \'loading-bar-\'+id : \'\'" :style="styling()"> <div class="glow-bar"></div> </div>',

	props: {
		id: String,
		class: String,

		progress: Number, // The progress of loading bar

		// the direction of loading bar
		direction: {
			type: String,
			default: "right"
		},

		error: Boolean // Loading Bar error state
	},

	data: function() {
		return {
			// To show
			show: true,

			// binding class when it end
			full: '',

			// state to animate the width of loading bar
			width: 0,

			// indicate the loading bar is in 100% ( so, wait it till gone )
			wait: false
		};
	},

	watch:{

		progress: function(val,old){
			var self = this;

			if(old == 0 && val > 0){
				// Callback Event when it's started
				this.$dispatch('loading-bar:started');
			}

			if(val > 1 && val < 100){
				// Callback Event when it's loading
				this.$dispatch('loading-bar:loading');
			}

			// When the progress end
			if(this.progress == 100){

				// Prevent new progress change
				this.wait = true;

				// Start animate it
				this.width = 100;

				setTimeout(function(){
					// animate when element removed
					self.full = 'full';
					self.error = false;

						setTimeout(function () {
							//remove bar element
							self.show = false;

							// New Element is available to create now
							self.progress = 0;
							self.wait = false;

							setTimeout(function () {
								// Show Bar
								self.full = '';
								self.show = true;

								// Callback Event when it's loaded and totally gone
								self.$dispatch('loading-bar:loaded');
							});

					// Duration to Waiting for slick hiding animation
					},250);

				// Duration is depend on css animation-duration of loading-bar
				},700);

			// When the progress doesn't end yet
			}else{

				// Do normaly loading bar animation
				this.full = '';
				this.width = val;

			}

		},

		error: function(val,old){
			this.progress = 100;
			// Callback Event when it's error
			this.$dispatch('loading-bar:error');
		}

	},

	methods: {
		styling: function(){
			// When loading bar still in progress
			if(!this.wait){
				return { width: this.width+'%' };

			// When loading bar end
			}else{
				// Make it stuck at 100 to waiting the animation
				return{ width: '100%' };
			}

		}

	}
});

// Register
Vue.component('loading-bar',VueLoadingBar);
