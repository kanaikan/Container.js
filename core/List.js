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
		var it = this.iterator();
		var count = 0;
		while(it.hasNext()){
			if (element == it.next()) return count;
			count++;
		}
		return -1;
	}

	function lastIndexOf() {
		
	}

	function subList() {
		
	}

}