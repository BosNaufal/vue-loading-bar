# vue-loading-bar
Loading Bar Component for [Vue.Js](http://vuejs.org)

[DEMO](https://rawgit.com/BosNaufal/vue-loading-bar/master/index.html)

## Intro
Vue Loading Bar is a Youtube like loading bar component for Vue.Js.


## Features
- full customizable
- Already, Complete callback event
- Included `.vue` file
- well commented code
- doesn't require any javascript libs, except [Vue.Js](http://vuejs.org)

## Install
Include the [vue-loading-bar.js](./vue-loading-bar.js) to your HTML or web page file, after [Vue.Js](http://vuejs.org). Look an example in [example.html](./example.html). And don't forget to include [vue-loading-bar.css](./vue-loading-bar.css) file when you use this way.

Or

You can import [vue-loading-bar.vue](./vue-loading-bar.vue) to your vue component file like [this](./vueku.js) and process it with your preprocessor.


```javascript
import loading-bar from ./vue-loading-bar.vue
// Or
var loading-bar = require('./vue-loading-bar.vue');
```

## Usage
minimal:
```html
<loading-bar
	class="someClass"
	id="SomeId"
	progress="10%">
</loading-bar>
```
Full Example:
```html
<loading-bar
	class="someClass"
	id="someId"
	progress="10%"
	direction="left"
	error="true">
</loading-bar>
```

## Props

##### `progress` (*) : The Percentage of loading-bar component. String value with percent ( ex: 100% ).


##### `direction` : The Direction of loading-bar component. The default value is "right".


##### `error` : Boolean value to force error state of loading bar.


##### `class` : Component Class (optional)


##### `id` : Component Id (optional)

<br/>

## Callback Events
The [vue-loading-bar](https://github.com/BosNaufal/vue-loading-bar) component will dispatch some events such as,
```javascript
...
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

}
```

## Thank You for Making this useful~
Hopefully this can be useful.

## Let's talk about some projects with me
Just Contact Me At:
- Email: [bosnaufalemail@gmail.com](mailto:bosnaufalemail@gmail.com)
- Skype Id: bosnaufal254
- twitter: [@BosNaufal](https://twitter.com/BosNaufal)

## License
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2016 - forever Naufal Rabbani
