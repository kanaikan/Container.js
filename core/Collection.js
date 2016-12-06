function Collection() {
	// variables
	this.elements = new Array();
	// methods
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
}

function add(element) {
	this.elements.push(element);
}

function addAll(collection) {
	while(!collection.isEmpty()){ 
		this.add(collection.elements.shift());
	}
}

function clear() {
	this.elements = new Array();
}

function contains(element) {
	var tmp = new Array();
	var contains = false;
	while(!this.isEmpty()){
		var e = this.elements.shift();
		if (e == element) contains = true;
		tmp.push(e);
	}
	this.elements = tmp;
	return contains;
}

function containAll(collection) {
	var containAll = false;
	while(!collection.isEmpty()){
		if (this.contains(collection.elements.shift())) ;
	}
	return containAll;
}

function isEmpty() {
	return this.size() == 0?true:false;
}

function iterator() {
	// body...
}

function remove(element) {
	var tmp = new Array();
	while(!this.isEmpty()){
		var e = this.elements.shift();
		if (e != element) {
			tmp.push(e);
		}
	}
	this.elements = tmp;
}

function removeAll(collection) {
	while(!collection.isEmpty()){ 
		this.remove(collection.elements.shift());
	}
}

function retainAll(collection) {
	var tmp = new Array();
	while(!collection.isEmpty()){
		var clone = new Collection();
		clone.elements = this.elements.slice(0);
		var element = collection.elements.shift();
		while(!clone.isEmpty()){
			var e = clone.elements.shift();
			if (e == element) {
				tmp.push(e);
			}
		}
	}
	this.elements = tmp;
}

function size() {
	return this.elements.length;
}