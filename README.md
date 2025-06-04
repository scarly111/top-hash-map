# HashMap Implementation

This project is part of **The Odin Project** curriculum.

## What We Built

We implemented a custom `HashMap` class in JavaScript that mimics the basic functionality of a real hash map. This includes:

- Efficient key-value storage using hashing
- Collision handling with chaining
- Dynamic resizing based on load factor

## Features

- `set(key, value)` — Adds or updates key-value pairs
- `get(key)` — Retrieves the value for a given key
- `has(key)` — Checks if a key exists
- `remove(key)` — Deletes a key-value pair
- `length()` — Returns the total number of entries
- `clear()` — Removes all entries
- `keys()` — Returns all keys
- `values()` — Returns all values
- `entries()` — Returns all key-value pairs

## Notes

- Only string keys are supported
- Load factor is set to `0.75` by default
- Capacity automatically doubles when the load is exceeded

This project helped us understand how hash maps work under the hood and practice object-oriented JavaScript.
