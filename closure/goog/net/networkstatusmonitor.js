// Copyright 2012 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Base class for objects monitoring and exposing runtime
 * network status information.
 */

goog.provide('goog.net.NetworkStatusMonitor');

<<<<<<< HEAD
goog.require('goog.events.EventTarget');
=======
goog.require('goog.events.Listenable');
>>>>>>> newgitrepo



/**
 * Base class for network status information providers.
<<<<<<< HEAD
 * @constructor
 * @extends {goog.events.EventTarget}
 */
goog.net.NetworkStatusMonitor = function() {
  goog.base(this);
};
goog.inherits(goog.net.NetworkStatusMonitor, goog.events.EventTarget);
=======
 * @interface
 * @extends {goog.events.Listenable}
 */
goog.net.NetworkStatusMonitor = function() {};
>>>>>>> newgitrepo


/**
 * Enum for the events dispatched by the OnlineHandler.
 * @enum {string}
 */
goog.net.NetworkStatusMonitor.EventType = {
  ONLINE: 'online',
  OFFLINE: 'offline'
};


/**
 * @return {boolean} Whether the system is online or otherwise.
 */
<<<<<<< HEAD
goog.net.NetworkStatusMonitor.prototype.isOnline = goog.abstractMethod;
=======
goog.net.NetworkStatusMonitor.prototype.isOnline;
>>>>>>> newgitrepo
