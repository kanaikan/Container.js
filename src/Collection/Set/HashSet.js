function HashSet() {
	// super constructor
	Set.call(this);

	// variables

	// default methods
	// @Override
	this.add = function(element) {
		if (!this.contains(element)) {
			this.toArray().push(element);
		}
	};

}