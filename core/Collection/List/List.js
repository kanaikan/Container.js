function List() {
	// super constructor
	Collection.call(this);
	
	// methods declarations
	this.set = set;
	this.get = get;
	this.indexOf = indexOf;
	this.lastIndexOf = lastIndexOf;
	this.subList = subList;

	// methods implementations
	function set(index, element) {
		var pre = this.toArray()[index];
		// if (index < 0 || index > this.size()) return IndexOutOfBoundsException;
		this.toArray()[index] = element;
		return pre;
	}

	function get(index) {
		// if (index < 0 || index >= this.size()) return IndexOutOfBoundsException;
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

	function lastIndexOf(element) {
		var it = this.iterator();
		var count = 0
		var counts = new Array();
		
		counts.push(-1);
		while(it.hasNext()){
			if (element == it.next()) counts.push(count);
			count++;
		}
		return counts.pop();
	}

	function subList(fromIndex, toIndex) {
		return this.toArray().slice(fromIndex, toIndex);
	}

}