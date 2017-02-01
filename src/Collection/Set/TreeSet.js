function TreeSet() {
	// super constructor
	Set.call(this);

	// variables

	// default methods
	this.ceiling = function (element) {
		if (this.contains(element)) return element;
		var it = this.iterator();
		var least = element;
		while(it.hasNext()){
			var next = it.next();
			if (next > element && next > least) least = next;
		}
		return least == element ? null : least;
	};

	this.floor = function (element) {
		if (this.contains(element)) return element;
		var it = this.iterator();
		var max = element;
		while(it.hasNext()){
			var next = it.next();
			if (next < element && next < max) max = next;
		}
		return max == element ? null : max;
	};

	this.descendingSet = function () {
		this.toArray().reverse();
		var clone = this.clone();
		this.toArray().reverse();
		return clone;
	};

	this.first = function () {
		return this.toArray()[0];
	};

	this.last = function () {
		return this.toArray()[this.size() - 1];
	};

	this.headSet = function (element, inclusive) {
		return getHeadSet(element, -1, inclusive);
	};

	// private functions
	var getHeadSet = function (element, compare, inclusive) {
		var set = new TreeSet();
		var it = this.iterator();
		while(it.hasNext()){
			var next = it.next();
			var condition = compare < 0 ? next < element : next > element;
			if (condition) {
				set.add(next);
			}
		}
		if (this.contains(element) && inclusive) set.add(element);
		return set;
	};

}