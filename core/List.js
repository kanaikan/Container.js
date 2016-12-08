function List() {
	// super constructor
	Collection.call(this);
	
	// methods declarations
	this.get = get;
	this.indexOf = indexOf;
	this.lastIndexOf = lastIndexOf;
	this.subList = subList;

	// methods implementations
	function get(index) {
		if (index < 0 || index >= this.size()) return "IndexOutOfBoundsException";
		return this.toArray()[index];
	}
	function indexOf(element) {
		
	}
	function lastIndexOf() {
		
	}
	function subList() {
		
	}

}