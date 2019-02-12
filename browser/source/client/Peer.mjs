
import { Emitter } from '../Emitter.mjs';



const Peer = function(client) {

	this.client = client;
	Emitter.call(this);

};


Peer.prototype = Object.assign({}, Emitter.prototype, {

	read: function(payload, callback) {

		payload  = Object.isObject(payload)      ? payload  : null;
		callback = Function.isFunction(callback) ? callback : null;


		if (payload !== null && callback !== null) {

			this.once('read', response => callback(response));

			this.client.send({
				headers: {
					service: 'peer',
					method:  'read'
				},
				payload: payload
			});

		} else if (callback !== null) {
			callback(null);
		}

	},

	remove: function(payload, callback) {

		payload  = Object.isObject(payload)      ? payload  : null;
		callback = Function.isFunction(callback) ? callback : null;


		if (payload !== null && callback !== null) {

			this.once('remove', result => callback(result));

			this.client.send({
				headers: {
					service: 'peer',
					method:  'remove'
				},
				payload: payload
			});

		} else if (callback !== null) {
			callback(false);
		}

	},

	save: function(payload, callback) {

		payload  = Object.isObject(payload)      ? payload  : null;
		callback = Function.isFunction(callback) ? callback : null;


		if (payload !== null && callback !== null) {

			this.once('save', result => callback(result));

			this.client.send({
				headers: {
					service: 'peer',
					method:  'save'
				},
				payload: payload
			});

		} else if (callback !== null) {
			callback(false);
		}

	}

});


export { Peer };

