import { CartItem } from "../types/types";

export class cartIt {
	cartKey: string;
	cart: CartItem[];

	/**
	 * Constructs a new instance of the cartIt class.
	 *
	 * @param {string} cartKey The unique key for this cart in localStorage.
	 */
	constructor(cartKey: string) {
		this.cartKey = cartKey;
	}

	/**
	 * Saves the current cart to localStorage.
	 *
	 * This method converts the cart array into a JSON string and stores
	 * it in the browser's localStorage under the key specified by `cartKey`.
	 * It only executes this operation if the `window` object is defined,
	 * ensuring compatibility with non-browser environments.
	 */
	offlineSave() {
		if (typeof window !== "undefined") {
			localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
		}
	}

	/**
	 * Checks if the cart exists in localStorage.
	 *
	 * This method determines the presence of the cart by checking if
	 * the specified key exists in the browser's localStorage. It returns
	 * true if the cart is found, and false otherwise. The method only
	 * performs this check if the `window` object is defined, ensuring
	 * compatibility with non-browser environments.
	 *
	 * @returns {boolean} True if the cart exists, false otherwise.
	 */
	offlineCartExists() {
		if (typeof window !== "undefined") {
			return localStorage.getItem(this.cartKey) !== null;
		}
		return false;
	}

	/**
	 * Adds an item to the cart in localStorage.
	 *
	 * This method first retrieves the current cart from localStorage. It then adds the provided
	 * `cartItem` to the cart and saves the updated cart back to localStorage. This operation
	 * ensures that the cart is properly updated and persisted across browser sessions.
	 *
	 * @param {CartItem} cartItem The item to add to the cart.
	 */
	offlineAdd(cartItem: CartItem) {
		this.cart = this.offlineGet();
		if (!this.cart) {
			this.cart = [];
		}
		this.cart.push(cartItem);
		this.offlineSave();
	}

	/**
	 * Updates an existing item in the cart in localStorage by its ID.
	 *
	 * This method retrieves the cart from localStorage and searches for an item
	 * with the specified ID. If the item is found, it is replaced with the new
	 * cart item, and the updated cart is saved back to localStorage. If the item
	 * is not found, the cart remains unchanged.
	 *
	 * @param {CartItem} cartItem The CartItem object containing the updated details.
	 */
	offlineUpdate(cartItem: CartItem) {
		let itemToUpdate: CartItem | null = null;
		this.cart = this.offlineGet();

		for (const key in this.cart) {
			if (this.cart[key].id === cartItem.id) {
				itemToUpdate = this.cart[key];
				this.cart[key] = cartItem;
			}
		}

		this.offlineSave();
	}

	/**
	 * Retrieves an item from the cart in localStorage by its ID.
	 *
	 * This method retrieves the cart from localStorage and searches for an item
	 * with the specified ID. If the item is found, it is returned. If the item is
	 * not found, or if the cart is empty, the method returns null.
	 *
	 * @param {number|string} id The ID of the item to retrieve.
	 * @returns {CartItem|null} The item with the specified ID, or null if not found.
	 */
	offlineGetById(id: number | string) {
		this.cart = this.offlineGet();
		if (!this.cart) {
			return null;
		}
		return this.cart.find((item) => item.id === id) || null;
	}

	/**
	 * Get the cart from localStorage.
	 *
	 * @returns {any[]} An array of items in the cart, or null if the cart does not exist.
	 */
	offlineGet() {
		if (typeof window !== "undefined") {
			return JSON.parse(localStorage.getItem(this.cartKey) || "[]");
		}
		return [];
	}

	/**
	 * Removes an item from the cart in localStorage by its ID.
	 *
	 * This method retrieves the cart from localStorage and searches for an item
	 * with the specified ID. If the item is found, it is removed from the cart,
	 * the updated cart is saved back to localStorage, and the removed item is returned.
	 * If the item is not found, the method returns null.
	 *
	 * @param {number | string} id - The ID of the item to be removed from the cart.
	 * @returns {CartItem | null} The removed cart item, or null if the item was not found.
	 */
	offlineRemove(id: number | string) {
		this.cart = this.offlineGet();

		const index = this.cart.findIndex((item) => item.id === id);

		if (index === -1) {
			return null;
		}

		const removedItem = this.cart.splice(index, 1)[0];

		this.offlineSave();

		return removedItem;
	}

	/**
	 * Clears the cart from localStorage.
	 *
	 * This method removes the cart from the browser's localStorage by deleting
	 * the key specified by `cartKey`. It only performs this operation if the
	 * `window` object is defined, ensuring compatibility with non-browser environments.
	 */
	offlineClear() {
		if (typeof window !== "undefined") {
			localStorage.removeItem(this.cartKey);
		}
	}
}
