function ArrayList() {
	// super constructor
	List.call(this);

	// methods declarations
		// this.add = add;
	this.removeIf = removeIf;
	this.sort = sort;

	// methods implementations
		// overload
		// function add(index, element) {
		// 	return element;
		// }

	function removeIf(boolean) {
		if (boolean) this.toArray() = new Array();
	}

	function sort(order) {
		var array = this.toArray();
		for (var i = 0; i < array.length - 1; i++) {
			for (var j = i + 1; j < array.length; j++) {
				switch(order){
					case "ASCENDING":
						if (array[i] > array[j]) {
							var tmp = array[i];
							array[i] = array[j];
							array[j] = tmp;
						}
						break;
					case "DESCENDING":
						if (array[i] < array[j]) {
							var tmp = array[i];
							array[i] = array[j];
							array[j] = tmp;
						}
						break;
					default:
						break; 
				}
			}
		}
	}

	// private functions

}