class StringBuilder {
	#value = "";
	constructor(value) {
		this.#value = value;
	}

	getValue() {
		return this.#value;
	}

	padStart(value) {
		this.#value = value + this.#value;
	}

	padEnd(value) {
		this.#value = this.#value + value;
	}

	padBoth(value) {
		this.#value = value + this.#value + value;
	}
}


const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="