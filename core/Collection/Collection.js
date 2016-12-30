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

}