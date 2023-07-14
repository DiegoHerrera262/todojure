["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/structs/queue.js"],"~:js","goog.provide(\"goog.structs.Queue\");\ngoog.require(\"goog.array\");\ngoog.structs.Queue = function() {\n  this.front_ = [];\n  this.back_ = [];\n};\ngoog.structs.Queue.prototype.maybeFlip_ = function() {\n  if (this.front_.length === 0) {\n    this.front_ = this.back_;\n    this.front_.reverse();\n    this.back_ = [];\n  }\n};\ngoog.structs.Queue.prototype.enqueue = function(element) {\n  this.back_.push(element);\n};\ngoog.structs.Queue.prototype.dequeue = function() {\n  this.maybeFlip_();\n  return this.front_.pop();\n};\ngoog.structs.Queue.prototype.peek = function() {\n  this.maybeFlip_();\n  return goog.array.peek(this.front_);\n};\ngoog.structs.Queue.prototype.getCount = function() {\n  return this.front_.length + this.back_.length;\n};\ngoog.structs.Queue.prototype.isEmpty = function() {\n  return this.front_.length === 0 && this.back_.length === 0;\n};\ngoog.structs.Queue.prototype.clear = function() {\n  this.front_ = [];\n  this.back_ = [];\n};\ngoog.structs.Queue.prototype.contains = function(obj) {\n  return goog.array.contains(this.front_, obj) || goog.array.contains(this.back_, obj);\n};\ngoog.structs.Queue.prototype.remove = function(obj) {\n  return goog.array.removeLast(this.front_, obj) || goog.array.remove(this.back_, obj);\n};\ngoog.structs.Queue.prototype.getValues = function() {\n  var res = [];\n  for (var i = this.front_.length - 1; i >= 0; --i) {\n    res.push(this.front_[i]);\n  }\n  var len = this.back_.length;\n  for (var i = 0; i < len; ++i) {\n    res.push(this.back_[i]);\n  }\n  return res;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Datastructure: Queue.\n *\n *\n * This file provides the implementation of a FIFO Queue structure.\n * API is similar to that of com.google.common.collect.IntQueue\n *\n * The implementation is a classic 2-stack queue.\n * There's a \"front\" stack and a \"back\" stack.\n * Items are pushed onto \"back\" and popped from \"front\".\n * When \"front\" is empty, we replace \"front\" with reverse(back).\n *\n * Example:\n * front                         back            op\n * []                            []              enqueue 1\n * []                            [1]             enqueue 2\n * []                            [1,2]           enqueue 3\n * []                            [1,2,3]         dequeue -> ...\n * [3,2,1]                       []              ... -> 1\n * [3,2]                         []              enqueue 4\n * [3,2]                         [4]             dequeue -> 2\n * [3]                           [4]\n *\n * Front and back are simple javascript arrays. We rely on\n * Array.push and Array.pop being O(1) amortized.\n *\n * Note: In V8, queues, up to a certain size, can be implemented\n * just fine using Array.push and Array.shift, but other JavaScript\n * engines do not have the optimization of Array.shift.\n */\n\ngoog.provide('goog.structs.Queue');\n\ngoog.require('goog.array');\n\n\n\n/**\n * Class for FIFO Queue data structure.\n *\n * @constructor\n * @template T\n */\ngoog.structs.Queue = function() {\n  'use strict';\n  /**\n   * @private {!Array<T>} Front stack. Items are pop()'ed from here.\n   */\n  this.front_ = [];\n  /**\n   * @private {!Array<T>} Back stack. Items are push()'ed here.\n   */\n  this.back_ = [];\n};\n\n\n/**\n * Flips the back stack onto the front stack if front is empty,\n * to prepare for peek() or dequeue().\n *\n * @private\n */\ngoog.structs.Queue.prototype.maybeFlip_ = function() {\n  'use strict';\n  if (this.front_.length === 0) {\n    this.front_ = this.back_;\n    this.front_.reverse();\n    this.back_ = [];\n  }\n};\n\n\n/**\n * Puts the specified element on this queue.\n * @param {T} element The element to be added to the queue.\n */\ngoog.structs.Queue.prototype.enqueue = function(element) {\n  'use strict';\n  this.back_.push(element);\n};\n\n\n/**\n * Retrieves and removes the head of this queue.\n * @return {T} The element at the head of this queue. Returns undefined if the\n *     queue is empty.\n */\ngoog.structs.Queue.prototype.dequeue = function() {\n  'use strict';\n  this.maybeFlip_();\n  return this.front_.pop();\n};\n\n\n/**\n * Retrieves but does not remove the head of this queue.\n * @return {T} The element at the head of this queue. Returns undefined if the\n *     queue is empty.\n */\ngoog.structs.Queue.prototype.peek = function() {\n  'use strict';\n  this.maybeFlip_();\n  return goog.array.peek(this.front_);\n};\n\n\n/**\n * Returns the number of elements in this queue.\n * @return {number} The number of elements in this queue.\n */\ngoog.structs.Queue.prototype.getCount = function() {\n  'use strict';\n  return this.front_.length + this.back_.length;\n};\n\n\n/**\n * Returns true if this queue contains no elements.\n * @return {boolean} true if this queue contains no elements.\n */\ngoog.structs.Queue.prototype.isEmpty = function() {\n  'use strict';\n  return this.front_.length === 0 && this.back_.length === 0;\n};\n\n\n/**\n * Removes all elements from the queue.\n */\ngoog.structs.Queue.prototype.clear = function() {\n  'use strict';\n  this.front_ = [];\n  this.back_ = [];\n};\n\n\n/**\n * Returns true if the given value is in the queue.\n * @param {T} obj The value to look for.\n * @return {boolean} Whether the object is in the queue.\n */\ngoog.structs.Queue.prototype.contains = function(obj) {\n  'use strict';\n  return goog.array.contains(this.front_, obj) ||\n      goog.array.contains(this.back_, obj);\n};\n\n\n/**\n * Removes the first occurrence of a particular value from the queue.\n * @param {T} obj Object to remove.\n * @return {boolean} True if an element was removed.\n */\ngoog.structs.Queue.prototype.remove = function(obj) {\n  'use strict';\n  return goog.array.removeLast(this.front_, obj) ||\n      goog.array.remove(this.back_, obj);\n};\n\n\n/**\n * Returns all the values in the queue.\n * @return {!Array<T>} An array of the values in the queue.\n */\ngoog.structs.Queue.prototype.getValues = function() {\n  'use strict';\n  var res = [];\n  // Add the front array in reverse, then the back array.\n  for (var i = this.front_.length - 1; i >= 0; --i) {\n    res.push(this.front_[i]);\n  }\n  var len = this.back_.length;\n  for (var i = 0; i < len; ++i) {\n    res.push(this.back_[i]);\n  }\n  return res;\n};\n","~:compiled-at",1689300179597,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.structs.queue.js\",\n\"lineCount\":52,\n\"mappings\":\"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\",\n\"sources\":[\"goog/structs/queue.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Datastructure: Queue.\\n *\\n *\\n * This file provides the implementation of a FIFO Queue structure.\\n * API is similar to that of com.google.common.collect.IntQueue\\n *\\n * The implementation is a classic 2-stack queue.\\n * There's a \\\"front\\\" stack and a \\\"back\\\" stack.\\n * Items are pushed onto \\\"back\\\" and popped from \\\"front\\\".\\n * When \\\"front\\\" is empty, we replace \\\"front\\\" with reverse(back).\\n *\\n * Example:\\n * front                         back            op\\n * []                            []              enqueue 1\\n * []                            [1]             enqueue 2\\n * []                            [1,2]           enqueue 3\\n * []                            [1,2,3]         dequeue -> ...\\n * [3,2,1]                       []              ... -> 1\\n * [3,2]                         []              enqueue 4\\n * [3,2]                         [4]             dequeue -> 2\\n * [3]                           [4]\\n *\\n * Front and back are simple javascript arrays. We rely on\\n * Array.push and Array.pop being O(1) amortized.\\n *\\n * Note: In V8, queues, up to a certain size, can be implemented\\n * just fine using Array.push and Array.shift, but other JavaScript\\n * engines do not have the optimization of Array.shift.\\n */\\n\\ngoog.provide('goog.structs.Queue');\\n\\ngoog.require('goog.array');\\n\\n\\n\\n/**\\n * Class for FIFO Queue data structure.\\n *\\n * @constructor\\n * @template T\\n */\\ngoog.structs.Queue = function() {\\n  'use strict';\\n  /**\\n   * @private {!Array<T>} Front stack. Items are pop()'ed from here.\\n   */\\n  this.front_ = [];\\n  /**\\n   * @private {!Array<T>} Back stack. Items are push()'ed here.\\n   */\\n  this.back_ = [];\\n};\\n\\n\\n/**\\n * Flips the back stack onto the front stack if front is empty,\\n * to prepare for peek() or dequeue().\\n *\\n * @private\\n */\\ngoog.structs.Queue.prototype.maybeFlip_ = function() {\\n  'use strict';\\n  if (this.front_.length === 0) {\\n    this.front_ = this.back_;\\n    this.front_.reverse();\\n    this.back_ = [];\\n  }\\n};\\n\\n\\n/**\\n * Puts the specified element on this queue.\\n * @param {T} element The element to be added to the queue.\\n */\\ngoog.structs.Queue.prototype.enqueue = function(element) {\\n  'use strict';\\n  this.back_.push(element);\\n};\\n\\n\\n/**\\n * Retrieves and removes the head of this queue.\\n * @return {T} The element at the head of this queue. Returns undefined if the\\n *     queue is empty.\\n */\\ngoog.structs.Queue.prototype.dequeue = function() {\\n  'use strict';\\n  this.maybeFlip_();\\n  return this.front_.pop();\\n};\\n\\n\\n/**\\n * Retrieves but does not remove the head of this queue.\\n * @return {T} The element at the head of this queue. Returns undefined if the\\n *     queue is empty.\\n */\\ngoog.structs.Queue.prototype.peek = function() {\\n  'use strict';\\n  this.maybeFlip_();\\n  return goog.array.peek(this.front_);\\n};\\n\\n\\n/**\\n * Returns the number of elements in this queue.\\n * @return {number} The number of elements in this queue.\\n */\\ngoog.structs.Queue.prototype.getCount = function() {\\n  'use strict';\\n  return this.front_.length + this.back_.length;\\n};\\n\\n\\n/**\\n * Returns true if this queue contains no elements.\\n * @return {boolean} true if this queue contains no elements.\\n */\\ngoog.structs.Queue.prototype.isEmpty = function() {\\n  'use strict';\\n  return this.front_.length === 0 && this.back_.length === 0;\\n};\\n\\n\\n/**\\n * Removes all elements from the queue.\\n */\\ngoog.structs.Queue.prototype.clear = function() {\\n  'use strict';\\n  this.front_ = [];\\n  this.back_ = [];\\n};\\n\\n\\n/**\\n * Returns true if the given value is in the queue.\\n * @param {T} obj The value to look for.\\n * @return {boolean} Whether the object is in the queue.\\n */\\ngoog.structs.Queue.prototype.contains = function(obj) {\\n  'use strict';\\n  return goog.array.contains(this.front_, obj) ||\\n      goog.array.contains(this.back_, obj);\\n};\\n\\n\\n/**\\n * Removes the first occurrence of a particular value from the queue.\\n * @param {T} obj Object to remove.\\n * @return {boolean} True if an element was removed.\\n */\\ngoog.structs.Queue.prototype.remove = function(obj) {\\n  'use strict';\\n  return goog.array.removeLast(this.front_, obj) ||\\n      goog.array.remove(this.back_, obj);\\n};\\n\\n\\n/**\\n * Returns all the values in the queue.\\n * @return {!Array<T>} An array of the values in the queue.\\n */\\ngoog.structs.Queue.prototype.getValues = function() {\\n  'use strict';\\n  var res = [];\\n  // Add the front array in reverse, then the back array.\\n  for (var i = this.front_.length - 1; i >= 0; --i) {\\n    res.push(this.front_[i]);\\n  }\\n  var len = this.back_.length;\\n  for (var i = 0; i < len; ++i) {\\n    res.push(this.back_[i]);\\n  }\\n  return res;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"structs\",\"Queue\",\"goog.structs.Queue\",\"front_\",\"back_\",\"prototype\",\"maybeFlip_\",\"goog.structs.Queue.prototype.maybeFlip_\",\"length\",\"reverse\",\"enqueue\",\"goog.structs.Queue.prototype.enqueue\",\"element\",\"push\",\"dequeue\",\"goog.structs.Queue.prototype.dequeue\",\"pop\",\"peek\",\"goog.structs.Queue.prototype.peek\",\"array\",\"getCount\",\"goog.structs.Queue.prototype.getCount\",\"isEmpty\",\"goog.structs.Queue.prototype.isEmpty\",\"clear\",\"goog.structs.Queue.prototype.clear\",\"contains\",\"goog.structs.Queue.prototype.contains\",\"obj\",\"remove\",\"goog.structs.Queue.prototype.remove\",\"removeLast\",\"getValues\",\"goog.structs.Queue.prototype.getValues\",\"res\",\"i\",\"len\"]\n}\n"]