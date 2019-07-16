# Container.js
* Container.js is a JavaScript container extension

## Download
* Be aware of that you need to download this by hierarchy.
	* For example: if you only want `ArrayList.js`, you'll need to download `Container.js` + `List.js` + `ArrayList.js` to make it work. (the hierarchy is exactly based on Java API)
* If you don't know in what way the hierarchy goes, you can download the whole pack or 'Container.js`, which includes everything.

## How to use
### Declaration
* You can declare a Container variable by entering `var container;`

### Initialization
* You can declare variable `container` as an ArrayList `container = new ArrayList();`

### Calling Method
* Almost all of the Java Container Methods are implemented in Container.js
	* Call `add()` method to `container`:
		* `contaienr.add("I am the first element!");`
		* This method does not have any return type;
	* Call `get()` method to `container`:
		* `container.get(0);`
		* Output: `I am the first element!`

* Method `sort(order)` to `ArrayList` is different in Container.js:
	* Argument `order` should be either `ASCENDING` or `DESCENDING`

## Contact
* email: github.shikanchen@gmail.com
