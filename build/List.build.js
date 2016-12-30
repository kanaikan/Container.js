function Collection() {
	// variables
	var elements = new Array();

	// default methods
	this.add = function (element) {
		elements.push(element);
	}

	this.addAll = function (collection) {
		collection = collection.clone();
		while(!collection.isEmpty()){ 
			add(collection.toArray().shift());
		}
	}

	this.clear = function () {
		elements = new Array();
	}

	this.contains = function (element) {
		var tmp = new Array();
		var contains = false;
		while(!this.isEmpty()){
			var e = elements.shift();
			if (e == element) contains = true;
			tmp.push(e);
		}
		elements = tmp;
		return contains;
	}

	this.containAll = function (collection) {
		var containAll = false;
		collection = collection.clone();
		while(!collection.isEmpty()){
			if (contains(collection.toArray().shift())) ;
		}
		return containAll;
	}

	this.isEmpty = function () {
		return this.size() == 0 ? true : false;
	}

	this.iterator = function () {
		return new Iterator(this);
	}

	this.remove = function (element) {
		var tmp = new Array();
		while(!elements.isEmpty()){
			var e = elements.shift();
			if (e != element) {
				tmp.push(e);
			}
		}
		elements = tmp;
	}

	this.removeAll = function (collection) {
		while(!collection.isEmpty()){ 
			remove(collection.toArray().shift());
		}
	}

	this.removeIf = function (boolean) {
		if (boolean) this.toArray() = new Array();
	}

	this.retainAll = function (collection) {
		var tmp = new Array();
		while(!collection.isEmpty()){
			var clone = this.clone();
			var element = collection.toArray().shift();
			while(!clone.isEmpty()){
				var e = clone.toArray().shift();
				if (e == element) {
					tmp.push(e);
				}
			}
		}
		elements = tmp;
	}

	this.size = function () {
		return elements.length;
	}

	this.toArray = function () {
		return elements;
	}

	this.clone = function () {
		var clone = new Collection();
		clone.setArray(toArray().slice(0));
		return clone;
	}

	// Container.js methods
	this.setArray = function (arr) {
		elements = arr;
	}

}function List() {
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

}function ArrayList() {
	// super constructor
	List.call(this);

	// variables
	

	// methods declarations
		// add methods 
	this.sort = function (order) {
		for (var i = 0; i < this.toArray().length - 1; i++) {
			for (var j = i + 1; j < this.toArray().length; j++) {
				switch(order){
					case "ASCENDING":
						if (this.toArray()[i] > this.toArray()[j]) {
							var tmp = this.toArray()[i];
							this.toArray()[i] = this.toArray()[j];
							this.toArray()[j] = tmp;
						}
						break;
					case "DESCENDING":
						if (this.toArray()[i] < this.toArray()[j]) {
							var tmp = this.toArray()[i];
							this.toArray()[i] = this.toArray()[j];
							this.toArray()[j] = tmp;
						}
						break;
					default:
						break; 
				}
			}
		}
	}

	// private functions

}function LinkedList() {
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