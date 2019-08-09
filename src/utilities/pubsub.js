var Pubsub = {};

/**
 * Anonymous IIFE that creates the Pubsub object
 * @module Pubsub
 */
(function(obj) {
  var observers = {};

  /**
   * Publishes an event for all objects listening to events against the "notif" string
   * @memberof module:Pubsub
   * @method publish
   * @param {String} notif A unique string used to identify objects that have subscribed to a certain event
   * @param {*} [data] - General data passed to the objects listening for the event - can be of any type
   */
  obj.publish = (notif, data) => {
    if (!observers[notif]) {
      return false;
    }

    let subs = observers[notif];

    for (var subscriber of subs) {
      subscriber.callback(data);
    }
  };

  /**
   * Subscribes an object to listen for events on "notif"
   * @memberof module:Pubsub
   * @method subscribe
   * @param {String} notif A unique string used to identify objects that have subscribed to a certain event
   * @param {Object} subscriber The object that will be subscribed to events published on "notif"
   * @param cb The callback function invoked each time an event is published on "notif"
   */
  obj.subscribe = (notif, subscriber, cb) => {
    if (!observers[notif]) {
      observers[notif] = [];
    }

    observers[notif].push({
      observer: subscriber,
      callback: cb
    });
  };

  /**
   * Unsubscribes objects from a "notif"
   * @memberof module:Pubsub
   * @method unsubscribe
   * @param {String} notif A unique string used to identify objects that have subscribed to a certain event
   * @param {Object} subscriber The object that will be unsubscribed from events published on "notif"
   */
  obj.unsubscribe = (notif, subscriber) => {
    let subs = observers[notif];

    for (var i in subs) {
      if (subs[i].observer === subscriber) {
        subs.splice(i, 1);
        observers[notif] = subs;
        return;
      }
    }
  };
})(Pubsub);

export default Pubsub;