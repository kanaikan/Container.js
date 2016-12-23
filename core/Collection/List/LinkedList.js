function LinkedList() {
	// super constructor
	List.call(this);

	// variables
	var mirror = this.toArray().slice(0);

	// methods declarations
	this.addFirst = addFirst; this.offerFirst = addFirst;
	this.addLast = addFirst; this.offer = addLast; this.offerLast = addLast;
	this.element = element; this.peek = element; this.getFirst = element;
	this.getLast = getLast;
	this.poll = poll;
	this.pop = pop;
	this.push = push;
	this.removeFirst = removeFirst;
	this.removeLast = removeFirst;
	this.descendingIterator = descendingIterator;

	// methods implementations

	function addFirst(element) {
		mirror.reverse();
		mirror.push(element);
		mirror.reverse();
	}

	function addLast() {
		mirror.push(element);
	}

	function element() {
		return mirror[0];
	}

	function getLast() {
		var last = mirror[mirror.length];
	}

	function poll() {
		return mirror.shift();
	}

	function pop() {
		return mirror.pop();
	}

	function push(element) {
		mirror.push(element);
	}

	function removeFirst() {
		mirror.shift();
	}

	function removeLast() {
		mirror.pop();
	}

	function descendingIterator() {
		
	}

}