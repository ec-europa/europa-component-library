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
    const callbacks = this.events.get(eventName);

    if (callbacks) {
      callbacks.forEach((callback) => {
        callback(eventData);
      });
    }
  }
}

export default EventManager;
