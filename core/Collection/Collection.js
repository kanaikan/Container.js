function Collection() {
	// variables
	var elements = new Array();

	// methods declarations
		// default methods
	this.add = add;
	this.addAll = addAll;
	this.clear = clear;
	this.contains = contains;
	this.containAll = containAll;
	this.isEmpty = isEmpty;
	this.iterator = iterator;
	this.remove = remove;
	this.removeAll = removeAll;
	this.removeIf = removeIf;
	this.retainAll = retainAll;
	this.size = size;
	this.toArray = toArray;
	this.clone = clone;

		// Container.js methods
	this.setArray = setArray;

	// methods implementations
		// default methods
	function add(element) {
		elements.push(element);
	}

	function addAll(collection) {
		collection = collection.clone();
		while(!collection.isEmpty()){ 
			add(collection.toArray().shift());
		}
	}

	function clear() {
		elements = new Array();
	}

	function contains(element) {
		var tmp = new Array();
		var contains = false;
		while(!isEmpty()){
			var e = elements.shift();
			if (e == element) contains = true;
			tmp.push(e);
		}
		elements = tmp;
		return contains;
	}

	function containAll(collection) {
		var containAll = false;
		collection = collection.clone();
		while(!collection.isEmpty()){
			if (contains(collection.toArray().shift())) ;
		}
		return containAll;
	}

	function isEmpty() {
		return size() == 0 ? true : false;
	}

	function iterator() {
		return new Iterator(this);
	}

	function remove(element) {
		var tmp = new Array();
		while(!isEmpty()){
			var e = elements.shift();
			if (e != element) {
				tmp.push(e);
			}
		}
		elements = tmp;
	}

	function removeAll(collection) {
		while(!collection.isEmpty()){ 
			remove(collection.toArray().shift());
		}
	}

	function removeIf(boolean) {
		if (boolean) this.toArray() = new Array();
	}

	function retainAll(collection) {
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

	function size() {
		return elements.length;
	}

	function toArray() {
		return elements;
	}

	function clone() {
		var clone = new Collection();
		clone.setArray(toArray().slice(0));
		return clone;
		// return clone(this);
	}

		// Container.js methods
	function setArray(arr) {
		elements = arr;
	}

}