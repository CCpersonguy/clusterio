/**
 * Errors thrown in Clusterio
 * @module lib/errors
 */
"use strict";

/**
 * Thrown by commands when they fail
 * @static
 */
class CommandError extends Error { }

/**
 * Thrown from requests sent when an error occured handling it
 * @static
 */
class RequestError extends Error { }

/**
 * Thrown when a permission check fails.
 *
 * Is a subclass of RequestError to prevent logging stack traces when
 * requests fail due to permission denied.
 *
 * @static
 */
class PermissionError extends RequestError { }

/**
 * Signal for messages that fail validation
 * @static
 */
class InvalidMessage extends Error {
	constructor(msg, errors) {
		super(msg);
		this.errors = errors || null;
	}
}

/**
 * Thrown from requests when the session it was sent on was lost
 * @static
 */
class SessionLost extends Error { }

/**
 * Thrown when WebSocket authentication failed
 * @static
 */
class AuthenticationFailed extends Error { }

/**
 * Errror class for known errors occuring during startup
 * @static
 */
class StartupError extends Error { }

/**
 * Errors outside of our control
 * @static
 */
class EnvironmentError extends Error { }

/**
 * Errors caused by plugins
 * @static
 */
class PluginError extends Error {
	constructor(pluginName, original) {
		super(`PluginError: ${original.message}`);
		this.pluginName = pluginName;
		this.original = original;
	}
}

module.exports = {
	CommandError,
	RequestError,
	PermissionError,
	InvalidMessage,
	SessionLost,
	AuthenticationFailed,
	StartupError,
	EnvironmentError,
	PluginError,
};
