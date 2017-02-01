function Set() {
	// super constructor
	Collection.call(this);

	// variables

	// default methods
	this.hashcode = function () {
		var str = this.toArray().toString();
		var hash = 0;
		for (i = 0; i < str.length; i++) {
			char = str.charCodeAt(i);
			hash = ((hash << 5) - hash) + char;
			hash = hash & hash; // Convert to 32bit integer
    	}
		return hash;
	};
}