class Module {
    constructor({ checkout, bus, api, notify }) {
        this.checkout = checkout;
        this.notify = notify;
        this.bus = bus;
        this.api = api;
        this.window = window;
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

export default Module;
