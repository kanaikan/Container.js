function Set() {
	// super constructor
	Collection.call(this);

	// variables
	var mirror = this.toArray().slice(0);

	// methods declarations
		// default methods
	this.hashcode = hashcode;

	// methods implementations
	function hashcode() {
		var str = mirror.toString();
		var h = 0, off = 0;
		var len = str.length;
		for (var i = 0; i < len; i++) {
			h = 31 * h + str.charCodeAt(off++);
		}
		return h;
	}
}