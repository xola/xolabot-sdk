export class Module {
    constructor({ checkout, bus, store, api, notify }) {
        this.checkout = checkout;
        this.notify = notify;
        this.store = store;
        this.bus = bus;
        this.api = api;
    }

    register(name, listeners) {
        this.name = name;

        for (let event in listeners) {
            this.bus.on(event, listeners[event]);
        }
    }

    initialize() {
        throw new Error('All modules must implement "initialize" method!');
    }

    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    static load() {
        const hashedLoadXolabotModuleName = btoa('loadXolabotModule');
        if (window[hashedLoadXolabotModuleName]) {
            window[hashedLoadXolabotModuleName](this);
        } else {
            console.warning('You are trying to load XolaBot module, but Xolabot has not been initialized yet...');
        }
    }
}
