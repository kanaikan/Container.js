function Iterator(collection) {
	// varaibles
	var elements = collection.toArray().slice(0);
	var nextElement = undefined;
	var checked = false;

	// methods declarations
	this.hasNext = hasNext;
	this.next = next;

	// methods implementations
	function hasNext() {
		nextElement = elements.shift();
		var hasNext = nextElement != undefined;
		this.hasNext = function (){
			 return hasNext;
		};
		return hasNext;
	}

	function next() {
		this.hasNext = hasNext;
		return nextElement;
	}
}