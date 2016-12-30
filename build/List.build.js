function List() {
	// super constructor
	Collection.call(this);
	
	// methods declarations
	this.set = set;
	this.get = get;
	this.indexOf = indexOf;
	this.lastIndexOf = lastIndexOf;
	this.subList = subList;

	// methods implementations
	function set(index, element) {
		var pre = this.toArray()[index];
		// if (index < 0 || index > this.size()) return IndexOutOfBoundsException;
		this.toArray()[index] = element;
		return pre;
	}

	function get(index) {
		// if (index < 0 || index >= this.size()) return IndexOutOfBoundsException;
		return this.toArray()[index];
	}

	function indexOf(element) {
		var it = this.iterator();
		var count = 0;
		
		while(it.hasNext()){
			if (element == it.next()) return count;
			count++;
		}
		return -1;
	}

	function lastIndexOf(element) {
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

	function subList(fromIndex, toIndex) {
		return this.toArray().slice(fromIndex, toIndex);
	}

}function ArrayList() {
	// super constructor
	List.call(this);

	// methods declarations
		// this.add = add;
	this.sort = sort;

	// methods implementations
		// overload
		// function add(index, element) {
		// 	return element;
		// }

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

}function LinkedList() {
	// super constructor
	List.call(this);

	// variables
	var mirror = this.toArray().slice(0);

	// methods declarations
	this.addFirst = addFirst; this.offerFirst = addFirst;
	this.addLast = addFirst; this.offer = addLast; this.offerLast = addLast;
	this.element = element; this.peek = element; this.getFirst = element;
	this.getLast = getLast;
	this.poll = poll;
	this.pop = pop;
	this.push = push;
	this.removeFirst = removeFirst;
	this.removeLast = removeFirst;
	this.descendingIterator = descendingIterator;

	// methods implementations

	function addFirst(element) {
		mirror.reverse();
		mirror.push(element);
		mirror.reverse();
	}

	function addLast() {
		mirror.push(element);
	}

	function element() {
		return mirror[0];
	}

	function getLast() {
		var last = mirror[mirror.length];
	}

	function poll() {
		return mirror.shift();
	}

	function pop() {
		return mirror.pop();
	}

	function push(element) {
		mirror.push(element);
	}

	function removeFirst() {
		mirror.shift();
	}

	function removeLast() {
		mirror.pop();
	}

	function descendingIterator() {
		
	}

}