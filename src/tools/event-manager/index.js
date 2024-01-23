export class EventManager {
  constructor() {
    this.events = new Map();
  }

  on(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push(callback);
  }

  trigger(eventName, eventData) {
    if (this.events.has(eventName)) {
      const callbacks = this.events.get(eventName);
      callbacks.forEach((callback) => {
        callback(eventData);
      });
    }
  }

  /**
   * Get the list of supported events.
   * @returns {Array} - An array of supported events.
   */
  getSupportedEvents() {
    return Object.keys(this.eventCallbacks);
  }
}

export default EventManager;
