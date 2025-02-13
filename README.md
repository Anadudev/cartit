# Cart Management System

This project is a simple cart management system that allows users to manage their shopping cart using the browser's localStorage. It provides functionalities to add, update, retrieve, and remove items from the cart, ensuring persistence across browser sessions.

## Features

- **Add Item**: Add an item to the cart and save it in localStorage.
- **Update Item**: Update an existing item in the cart by its ID.
- **Retrieve Item**: Retrieve a specific item from the cart by its ID.
- **Remove Item**: Remove an item from the cart by its ID.
- **Check Cart Existence**: Check if the cart exists in localStorage.
- **Clear Cart**: Remove all items from the cart.

## Classes

### `CartItem`

Represents an item in the cart with the following fields:
- `id`: A unique identifier for the cart item (number or string).
- `item`: The actual item object.

### `cartIt`

Manages the cart operations with the following methods:
- `offlineAdd(cartItem: CartItem)`: Adds an item to the cart.
- `offlineUpdate(cartItem: CartItem)`: Updates an existing item in the cart.
- `offlineGetById(id: number | string)`: Retrieves an item from the cart by ID.
- `offlineRemove(id: number | string)`: Removes an item from the cart by ID.
- `offlineCartExists()`: Checks if the cart exists in localStorage.
- `offlineGet()`: Retrieves all items in the cart.
- `offlineSave()`: Saves the current cart to localStorage.
- `offlineClear()`: Clears all items in the cart.

## Usage

1. **Initialize**: Create an instance of `cartIt` with a unique `cartKey` to identify the cart in localStorage.
   ```javascript
   const myCart = new cartIt('myCartKey');
   ```

2. **Add Item**: Add a new item to the cart.
   ```javascript
   const newItem = new CartItem(1, {name: 'Apple', quantity: 3});
   myCart.offlineAdd(newItem);
   ```

3. **Update Item**: Update an existing cart item.
   ```javascript
   const updatedItem = new CartItem(1, {name: 'Apple', quantity: 5});
   myCart.offlineUpdate(updatedItem);
   ```

4. **Retrieve Item**: Get an item by its ID.
   ```javascript
   const item = myCart.offlineGetById(1);
   ```

5. **Remove Item**: Remove an item by its ID.
   ```javascript
   const removedItem = myCart.offlineRemove(1);
   ```

6. **Clear Cart**: Clear all items from the cart.
   ```javascript
   myCart.offlineClear();
   ```

## License

This project is licensed under the MIT License.
