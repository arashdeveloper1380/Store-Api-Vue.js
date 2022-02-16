var myApplication1 = new Vue({
	el:"#app",
	data:{
		title:'Salam Arash',
		link:'http://arash.com'
	},
	methods: {
		changeTitle: function (event) {
			this.title = event.target.value;  // Real Change Input Text with (event)
		},

		sayHello: function () {
			return "Hello Vue.js";
		}
	},
});