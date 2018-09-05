class Module {
    /**
     * Create a new module instance.
     * @param {string} name    Module name.
     * @param {Object} options Object with properties provided by Xolabot Dispatcher.
     */
    constructor(name, options) {
        if (!name) {
            throw new Error('Module name is not defined!');
        }

        // Set the name as instance property.
        // We will also use the same name for the channel.
        this.name = this.channel = name;

        // Assign all options provided by Xolabot Dispatcher to the module instance.
        Object.assign(this, options);

        // Load state from local storage.
        this.state = this.getState();
    }

    /**
     * Get unique key for storing module state in local storage.
     * @private
     */
    getLocalStorageKey() {
        return `xb_module.${this.name}`;
    }

    /**
     * Save module state to local storage.
     * @param {any} state
     */
    setState(state) {
        this.state = state;

        try {
            localStorage.setItem(this.getLocalStorageKey(), JSON.stringify(this.state));
        } catch (e) {
            console.warn('Failed saving module state in local storage!');
        }
    }

    /**
     * Load module state from local storage.
     * @private
     * @returns {any}
     */
    getState() {
        try {
            const rawState = localStorage.getItem(this.getLocalStorageKey());
            if (rawState) {
                return JSON.parse(rawState);
            }
        } catch (e) {
            this.clearState();
            console.warn('Failed loading module state from local storage!');
        }

        return {};
    }

    /**
     * Remove state from local storage.
     */
    clearState() {
        this.state = {};
        localStorage.removeItem(this.getLocalStorageKey());
    }

    /**
     * Helper method for delaying actions in code.
     * @example
     * // Sleeps for two seconds.
     * await this.sleep(2000);
     * @param {Number} milliseconds
     */
    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    /**
     * Load a module in Xolabot Dispatcher.
     */
    static load() {
        const hashedLoadXolabotModuleName = btoa('loadXolabotModule');
        if (window[hashedLoadXolabotModuleName]) {
            window[hashedLoadXolabotModuleName](this);
        } else {
            console.warn('You are trying to load a module, but Xolabot has not been initialized yet...');
        }
    }
}

export default Module;
