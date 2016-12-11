function LinkedList() {
	// super constructor
	List.call(this);

	// methods declarations
	this.addFirst = addFirst; this.offerFirst = addFirst;
	this.addLast = addFirst; this.offer = addLast; this.offerLast = addLast;
	this.element = element; this.peek = element;
	this.getFirst = getFirst;
	this.getLast = getLast;
	this.poll = poll;
	this.pop = pop;
	this.push = push;
	this.removeFirst = removeFirst;
	this.removeLast = removeFirst;
	this.descendingIterator = descendingIterator;

	// methods implementations
}