class Module {
    constructor(options) {
        Object.assign(this, options);
    }

    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    static load() {
        const hashedLoadXolabotModuleName = btoa('loadXolabotModule');
        if (window[hashedLoadXolabotModuleName]) {
            window[hashedLoadXolabotModuleName](this);
        } else {
            console.warn('You are trying to load XolaBot module, but Xolabot has not been initialized yet...');
        }
    }
}

export default Module;
