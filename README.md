# Xolabot SDK

## Installation

```
$ npm install xolabot-sdk xolabot-scripts
```

### Create entry point file: `src/index.js`.

### Setup scripts in your `package.json`.

```json
{
    "scripts": {
        "start": "xolabot-scripts start",
        "build": "xolabot-scripts build"
    }
}
```

### Start Development Server

```
$ npm start
```

This will spin up a development server and serve your module from: `http://localhost:3000/main.js`.

You can use that address to register a plugin in App Store server.

## Usage

In `src/index.js`:

```javascript
import Module from 'xolabot-sdk';

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

```
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

```
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

```
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

### this.api {Axios}

### Save State to Local Storage

```
/**
 * @param state {Object}
 */
this.saveState(state);
```
