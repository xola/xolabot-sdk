class Module {
    /**
     * Create a new module instance.
     * @param {Object} options Object with properties provided by Xolabot Dispatcher.
     */
    constructor(options) {
        Object.assign(this, options);
        this.state = this.getState();
    }

    /**
     * Get unique key for storing module state in local storage.
     * @private
     */
    getLocalStorageKey() {
        if (!this.name) {
            throw new Error('Module name is not defined!');
        }

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
