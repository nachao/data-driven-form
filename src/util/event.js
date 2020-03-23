export default class Event{
	data = [];

	register(key) {
		this.data[key] = [];
		console.log('register', this.data, key);
	}

	disposer() {

	}

	dispatch(key) {
		Array.isArray(this.data[key]) && this.data[key].forEach(fn => fn(key));
		console.log('dispatch', this.data, key);
	}

	on(key, fn) {
		setTimeout(() => {
			Array.isArray(this.data[key]) && this.data[key].push(fn);
			console.log('on', this.data, key);
		});
	}
	ons(keys, fn) {
		Array.isArray(Object.keys(keys)) && Object.keys(keys).forEach(key => this.on(key, fn));
	}

	off() {

	}
}