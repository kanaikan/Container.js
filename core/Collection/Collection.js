function Collection() {
	// variables
	var elements = new Array();

	// methods declarations
	this.add = add;
	this.addAll = addAll;
	this.clear = clear;
	this.contains = contains;
	this.containAll = containAll;
	this.isEmpty = isEmpty;
	this.iterator = iterator;
	this.remove = remove;
	this.removeAll = removeAll;
	this.retainAll = retainAll;
	this.size = size;
	this.toArray = toArray;

	// methods implementations
	function add(element) {
		elements.push(element);
	}

	function addAll(collection) {
		while(!collection.isEmpty()){ 
			add(collection.elements.shift());
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
		while(!collection.isEmpty()){
			if (contains(collection.elements.shift())) ;
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
			remove(collection.elements.shift());
		}
	}

	function retainAll(collection) {
		var tmp = new Array();
		while(!collection.isEmpty()){
			var clone = new Collection();
			clone.elements = elements.slice(0);
			var element = collection.elements.shift();
			while(!clone.isEmpty()){
				var e = clone.elements.shift();
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

}