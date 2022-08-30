# Xolabot SDK

## Installation

```sh
$ npm install xolabot-sdk
```

## Usage

```js
import { Module } from 'xolabot-sdk';

class MyModule extends Module {
    constructor(...args) {
        super('my_module_name', ...args);

        // Register bus event listeners here...
    }
}

// Required.
// This is how module will be registered with Xolabot.
MyModule.load();
```

## Available APIs

### Event Bus (EventBus)

Event bus is available as an instance property: `this.bus`.

#### Subscribe to an event.

```js
/**
 * @param   {Object}   event
 * @param   {string}   event.channel
 * @param   {string}   event.type
 * @param   {Function} listener
 * @returns {Function} Function for unsubscribing from the event.
 */
this.bus.on(event, listener);
```

#### Subscribe to an event once.

```js
/**
 * @param   {Object}   event
 * @param   {string}   event.channel
 * @param   {string}   event.type
 * @param   {Function} listener
 * @returns {Function} Function for unsubscribing from the event.
 */
this.bus.once(event, listener);
```

#### Unsubscribe from an event.

```js
/**
 * @param   {Object}   event
 * @param   {string}   event.channel
 * @param   {string}   event.type
 * @param   {Function} listener
 * @returns {Function} Function for unsubscribing from the event.
 */
this.bus.off(event, listener);
```

### API Client (Axios)

Available as an instance property: `this.api`.

See official [documentation](https://github.com/axios/axios).

### Save State to Local Storage

```js
/**
 * @param state {Object}
 */
this.saveState(state);
```
