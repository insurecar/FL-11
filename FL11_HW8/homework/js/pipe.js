function addOne(x) {
	return x + 1;
}
function pipe() {
	let count = arguments[0];
	for (let i = 1; i < arguments.length; i++) {
		count = arguments[i](count);
	}
	return count;
}
pipe(1,addOne);
