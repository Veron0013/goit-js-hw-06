class Storage {
	#items;
	constructor(itemsArr) {
		this.#items = itemsArr;
	}

	getItems() {
		return this.#items;
	}

	addItem(itemName) {
		this.#items.push(itemName);
	}

	removeItem(itemName) {
		const indexDel = this.#items.indexOf(itemName);
		indexDel >= 0 ? this.#items.splice(indexDel, 1) : console.log(`Item: ${itemName} is not in Storage`);
	}
}



const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]