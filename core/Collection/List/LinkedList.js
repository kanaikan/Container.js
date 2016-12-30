function LinkedList() {
	// super constructor
	List.call(this);

	// variables

	// default methods
	this.offerFirst = this.addFirst;
	this.offer = this.addLast; this.offerLast = this.addLast;
	this.peek = this.element; this.getFirst = this.element;

	this.addFirst = function (element) {
		this.toArray().unshift(element);
	}

	this.addLast = function (element) {
		this.toArray().push(element);
	}

	this.element = function () {
		return this.toArray()[0];
	}

	this.getLast = function () {
		var last = this.toArray()[this.toArray().length];
	}

	this.poll = function () {
		return this.toArray().shift();
	}

	this.pop = function () {
		return this.toArray().pop();
	}

	this.push = function (element) {
		this.toArray().push(element);
	}

	this.removeFirst = function () {
		this.toArray().shift();
	}

	this.removeLast = function () {
		this.toArray().pop();
	}

	this.descendingIterator = function () {
		
	}

}