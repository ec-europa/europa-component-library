/**
 * A simple event manager class for managing custom events and callbacks.
 */
export class EventManager {
  /**
   * Constructs a new EventManager.
   */
  constructor() {
    this.events = new Map();
  }

  /**
   * Register a callback for a specific event.
   * @param {string} eventName - The name of the event.
   * @param {Function} callback - The callback function to be executed when the event is triggered.
   */
  on(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    this.events.get(eventName).push(callback);
  }

  /**
   * Trigger an event, executing all registered callbacks for that event.
   * @param {string} eventName - The name of the event to trigger.
   * @param {any} eventData - Additional data to pass to the callbacks.
   */
  trigger(eventName, eventData) {
    const callbacks = this.events.get(eventName);

    if (callbacks) {
      callbacks.forEach((callback) => {
        callback(eventData);
      });
    }
  }

  /**
   * Retrieve the most recently registered callback for a specific event.
   * @param {string} eventName - The name of the event.
   * @returns {Function|null} - The most recently registered callback, or null if none is registered.
   */
  getCallback(eventName) {
    const eventCallbacks = this.events.get(eventName) || [];
    return eventCallbacks;
  }
}

export default EventManager;
