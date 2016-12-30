function List() {
	// super constructor
	Collection.call(this);

	// default methods
	this.set = function (index, element) {
		var pre = this.toArray()[index];
		// if (index < 0 || index > this.size()) return IndexOutOfBoundsException;
		this.toArray()[index] = element;
		return pre;
	}

	this.get = function (index) {
		// if (index < 0 || index >= this.size()) return IndexOutOfBoundsException;
		return this.toArray()[index];
	}

	this.indexOf = function (element) {
		var it = this.iterator();
		var count = 0;
		
		while(it.hasNext()){
			if (element == it.next()) return count;
			count++;
		}
		return -1;
	}

	this.lastIndexOf = function (element) {
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

	this.subList = function (fromIndex, toIndex) {
		return this.toArray().slice(fromIndex, toIndex);
	}

}