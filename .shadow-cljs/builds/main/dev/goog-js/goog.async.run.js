["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/async/run.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.async.run\");\n  goog.module.declareLegacyNamespace();\n  const WorkQueue = goog.require(\"goog.async.WorkQueue\");\n  const asyncStackTag = goog.require(\"goog.debug.asyncStackTag\");\n  const nextTick = goog.require(\"goog.async.nextTick\");\n  const throwException = goog.require(\"goog.async.throwException\");\n  goog.ASSUME_NATIVE_PROMISE = goog.define(\"goog.ASSUME_NATIVE_PROMISE\", false);\n  let schedule;\n  let workQueueScheduled = false;\n  let workQueue = new WorkQueue();\n  let run = (callback, context = undefined) => {\n    if (!schedule) {\n      initializeRunner();\n    }\n    if (!workQueueScheduled) {\n      schedule();\n      workQueueScheduled = true;\n    }\n    callback = asyncStackTag.wrap(callback, \"goog.async.run\");\n    workQueue.add(callback, context);\n  };\n  let initializeRunner = () => {\n    if (goog.ASSUME_NATIVE_PROMISE || goog.global.Promise && goog.global.Promise.resolve) {\n      const promise = goog.global.Promise.resolve(undefined);\n      schedule = () => {\n        promise.then(run.processWorkQueue);\n      };\n    } else {\n      schedule = () => {\n        nextTick(run.processWorkQueue);\n      };\n    }\n  };\n  run.forceNextTick = (realSetTimeout = undefined) => {\n    schedule = () => {\n      nextTick(run.processWorkQueue);\n      if (realSetTimeout) {\n        realSetTimeout(run.processWorkQueue);\n      }\n    };\n  };\n  if (goog.DEBUG) {\n    run.resetQueue = () => {\n      workQueueScheduled = false;\n      workQueue = new WorkQueue();\n    };\n    run.resetSchedulerForTest = () => {\n      initializeRunner();\n    };\n  }\n  run.processWorkQueue = () => {\n    let item = null;\n    while (item = workQueue.remove()) {\n      try {\n        item.fn.call(item.scope);\n      } catch (e) {\n        throwException(e);\n      }\n      workQueue.returnUnused(item);\n    }\n    workQueueScheduled = false;\n  };\n  exports = run;\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\ngoog.module('goog.async.run');\ngoog.module.declareLegacyNamespace();\n\nconst WorkQueue = goog.require('goog.async.WorkQueue');\nconst asyncStackTag = goog.require('goog.debug.asyncStackTag');\nconst nextTick = goog.require('goog.async.nextTick');\nconst throwException = goog.require('goog.async.throwException');\n\n/**\n * @define {boolean} If true, use the global Promise to implement run\n * assuming either the native, or polyfill version will be used. Does still\n * permit tests to use forceNextTick.\n */\ngoog.ASSUME_NATIVE_PROMISE = goog.define('goog.ASSUME_NATIVE_PROMISE', false);\n\n/**\n * The function used to schedule work asynchronousely.\n * @private {function()}\n */\nlet schedule;\n\n/** @private {boolean} */\nlet workQueueScheduled = false;\n\n/** @type {!WorkQueue} */\nlet workQueue = new WorkQueue();\n\n/**\n * Fires the provided callback just before the current callstack unwinds, or as\n * soon as possible after the current JS execution context.\n * @param {function(this:THIS)} callback\n * @param {THIS=} context Object to use as the \"this value\" when calling the\n *     provided function.\n * @template THIS\n */\nlet run = (callback, context = undefined) => {\n  if (!schedule) {\n    initializeRunner();\n  }\n  if (!workQueueScheduled) {\n    // Nothing is currently scheduled, schedule it now.\n    schedule();\n    workQueueScheduled = true;\n  }\n  callback = asyncStackTag.wrap(callback, 'goog.async.run');\n\n  workQueue.add(callback, context);\n};\n\n/** Initializes the function to use to process the work queue. */\nlet initializeRunner = () => {\n  if (goog.ASSUME_NATIVE_PROMISE ||\n      (goog.global.Promise && goog.global.Promise.resolve)) {\n    // Use goog.global.Promise instead of just Promise because the relevant\n    // externs may be missing, and don't alias it because this could confuse the\n    // compiler into thinking the polyfill is required when it should be treated\n    // as optional.\n    const promise = goog.global.Promise.resolve(undefined);\n    schedule = () => {\n      promise.then(run.processWorkQueue);\n    };\n  } else {\n    schedule = () => {\n      nextTick(run.processWorkQueue);\n    };\n  }\n};\n\n/**\n * Forces run to use nextTick instead of Promise.\n * This should only be done in unit tests. It's useful because MockClock\n * replaces nextTick, but not the browser Promise implementation, so it allows\n * Promise-based code to be tested with MockClock.\n * However, we also want to run promises if the MockClock is no longer in\n * control so we schedule a backup \"setTimeout\" to the unmocked timeout if\n * provided.\n * @param {function(function())=} realSetTimeout\n */\nrun.forceNextTick = (realSetTimeout = undefined) => {\n  schedule = () => {\n    nextTick(run.processWorkQueue);\n    if (realSetTimeout) {\n      realSetTimeout(run.processWorkQueue);\n    }\n  };\n};\n\nif (goog.DEBUG) {\n  /** Reset the work queue. Only available for tests in debug mode. */\n  run.resetQueue = () => {\n    workQueueScheduled = false;\n    workQueue = new WorkQueue();\n  };\n\n  /** Resets the scheduler. Only available for tests in debug mode. */\n  run.resetSchedulerForTest = () => {\n    initializeRunner();\n  };\n}\n\n/**\n * Run any pending run work items. This function is not intended\n * for general use, but for use by entry point handlers to run items ahead of\n * nextTick.\n */\nrun.processWorkQueue = () => {\n  // NOTE: additional work queue items may be added while processing.\n  let item = null;\n  while (item = workQueue.remove()) {\n    try {\n      item.fn.call(item.scope);\n    } catch (e) {\n      throwException(e);\n    }\n    workQueue.returnUnused(item);\n  }\n\n  // There are no more work items, allow processing to be scheduled again.\n  workQueueScheduled = false;\n};\n\nexports = run;\n","~:compiled-at",1689300179584,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.async.run.js\",\n\"lineCount\":68,\n\"mappings\":\"AAAA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAAA,cAAA;AAKAA,MAAKC,CAAAA,MAAL,CAAY,gBAAZ,CAAA;AACAD,MAAKC,CAAAA,MAAOC,CAAAA,sBAAZ,EAAA;AAEA,QAAMC,YAAYH,IAAKI,CAAAA,OAAL,CAAa,sBAAb,CAAlB;AACA,QAAMC,gBAAgBL,IAAKI,CAAAA,OAAL,CAAa,0BAAb,CAAtB;AACA,QAAME,WAAWN,IAAKI,CAAAA,OAAL,CAAa,qBAAb,CAAjB;AACA,QAAMG,iBAAiBP,IAAKI,CAAAA,OAAL,CAAa,2BAAb,CAAvB;AAOAJ,MAAKQ,CAAAA,qBAAL,GAA6BR,IAAKS,CAAAA,MAAL,CAAY,4BAAZ,EAA0C,KAA1C,CAA7B;AAMA,MAAIC,QAAJ;AAGA,MAAIC,qBAAqB,KAAzB;AAGA,MAAIC,YAAY,IAAIT,SAAJ,EAAhB;AAUA,MAAIU,MAAM,CAACC,QAAD,EAAWC,OAAA,GAAUC,SAArB,CAAAH,IAAmC;AAC3C,QAAI,CAACH,QAAL;AACEO,sBAAA,EAAA;AADF;AAGA,QAAI,CAACN,kBAAL,CAAyB;AAEvBD,cAAA,EAAA;AACAC,wBAAA,GAAqB,IAArB;AAHuB;AAKzBG,YAAA,GAAWT,aAAca,CAAAA,IAAd,CAAmBJ,QAAnB,EAA6B,gBAA7B,CAAX;AAEAF,aAAUO,CAAAA,GAAV,CAAcL,QAAd,EAAwBC,OAAxB,CAAA;AAX2C,GAA7C;AAeA,MAAIE,mBAAmB,EAAAA,IAAM;AAC3B,QAAIjB,IAAKQ,CAAAA,qBAAT,IACKR,IAAKoB,CAAAA,MAAOC,CAAAA,OADjB,IAC4BrB,IAAKoB,CAAAA,MAAOC,CAAAA,OAAQC,CAAAA,OADhD,CAC0D;AAKxD,YAAMC,UAAUvB,IAAKoB,CAAAA,MAAOC,CAAAA,OAAQC,CAAAA,OAApB,CAA4BN,SAA5B,CAAhB;AACAN,cAAA,GAAW,EAAAA,IAAM;AACfa,eAAQC,CAAAA,IAAR,CAAaX,GAAIY,CAAAA,gBAAjB,CAAA;AADe,OAAjB;AANwD,KAD1D;AAWEf,cAAA,GAAW,EAAAA,IAAM;AACfJ,gBAAA,CAASO,GAAIY,CAAAA,gBAAb,CAAA;AADe,OAAjB;AAXF;AAD2B,GAA7B;AA4BAZ,KAAIa,CAAAA,aAAJ,GAAoB,CAACC,cAAA,GAAiBX,SAAlB,CAAAY,IAAgC;AAClDlB,YAAA,GAAW,EAAAA,IAAM;AACfJ,cAAA,CAASO,GAAIY,CAAAA,gBAAb,CAAA;AACA,UAAIE,cAAJ;AACEA,sBAAA,CAAed,GAAIY,CAAAA,gBAAnB,CAAA;AADF;AAFe,KAAjB;AADkD,GAApD;AASA,MAAIzB,IAAK6B,CAAAA,KAAT,CAAgB;AAEdhB,OAAIiB,CAAAA,UAAJ,GAAiB,EAAAC,IAAM;AACrBpB,wBAAA,GAAqB,KAArB;AACAC,eAAA,GAAY,IAAIT,SAAJ,EAAZ;AAFqB,KAAvB;AAMAU,OAAImB,CAAAA,qBAAJ,GAA4B,EAAAC,IAAM;AAChChB,sBAAA,EAAA;AADgC,KAAlC;AARc;AAkBhBJ,KAAIY,CAAAA,gBAAJ,GAAuB,EAAAS,IAAM;AAE3B,QAAIC,OAAO,IAAX;AACA,WAAOA,IAAP,GAAcvB,SAAUwB,CAAAA,MAAV,EAAd,CAAkC;AAChC,SAAI;AACFD,YAAKE,CAAAA,EAAGC,CAAAA,IAAR,CAAaH,IAAKI,CAAAA,KAAlB,CAAA;AADE,OAEF,QAAOC,CAAP,CAAU;AACVjC,sBAAA,CAAeiC,CAAf,CAAA;AADU;AAGZ5B,eAAU6B,CAAAA,YAAV,CAAuBN,IAAvB,CAAA;AANgC;AAUlCxB,sBAAA,GAAqB,KAArB;AAb2B,GAA7B;AAgBA+B,SAAA,GAAU7B,GAAV;AA9HA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/async/run.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\ngoog.module('goog.async.run');\\ngoog.module.declareLegacyNamespace();\\n\\nconst WorkQueue = goog.require('goog.async.WorkQueue');\\nconst asyncStackTag = goog.require('goog.debug.asyncStackTag');\\nconst nextTick = goog.require('goog.async.nextTick');\\nconst throwException = goog.require('goog.async.throwException');\\n\\n/**\\n * @define {boolean} If true, use the global Promise to implement run\\n * assuming either the native, or polyfill version will be used. Does still\\n * permit tests to use forceNextTick.\\n */\\ngoog.ASSUME_NATIVE_PROMISE = goog.define('goog.ASSUME_NATIVE_PROMISE', false);\\n\\n/**\\n * The function used to schedule work asynchronousely.\\n * @private {function()}\\n */\\nlet schedule;\\n\\n/** @private {boolean} */\\nlet workQueueScheduled = false;\\n\\n/** @type {!WorkQueue} */\\nlet workQueue = new WorkQueue();\\n\\n/**\\n * Fires the provided callback just before the current callstack unwinds, or as\\n * soon as possible after the current JS execution context.\\n * @param {function(this:THIS)} callback\\n * @param {THIS=} context Object to use as the \\\"this value\\\" when calling the\\n *     provided function.\\n * @template THIS\\n */\\nlet run = (callback, context = undefined) => {\\n  if (!schedule) {\\n    initializeRunner();\\n  }\\n  if (!workQueueScheduled) {\\n    // Nothing is currently scheduled, schedule it now.\\n    schedule();\\n    workQueueScheduled = true;\\n  }\\n  callback = asyncStackTag.wrap(callback, 'goog.async.run');\\n\\n  workQueue.add(callback, context);\\n};\\n\\n/** Initializes the function to use to process the work queue. */\\nlet initializeRunner = () => {\\n  if (goog.ASSUME_NATIVE_PROMISE ||\\n      (goog.global.Promise && goog.global.Promise.resolve)) {\\n    // Use goog.global.Promise instead of just Promise because the relevant\\n    // externs may be missing, and don't alias it because this could confuse the\\n    // compiler into thinking the polyfill is required when it should be treated\\n    // as optional.\\n    const promise = goog.global.Promise.resolve(undefined);\\n    schedule = () => {\\n      promise.then(run.processWorkQueue);\\n    };\\n  } else {\\n    schedule = () => {\\n      nextTick(run.processWorkQueue);\\n    };\\n  }\\n};\\n\\n/**\\n * Forces run to use nextTick instead of Promise.\\n * This should only be done in unit tests. It's useful because MockClock\\n * replaces nextTick, but not the browser Promise implementation, so it allows\\n * Promise-based code to be tested with MockClock.\\n * However, we also want to run promises if the MockClock is no longer in\\n * control so we schedule a backup \\\"setTimeout\\\" to the unmocked timeout if\\n * provided.\\n * @param {function(function())=} realSetTimeout\\n */\\nrun.forceNextTick = (realSetTimeout = undefined) => {\\n  schedule = () => {\\n    nextTick(run.processWorkQueue);\\n    if (realSetTimeout) {\\n      realSetTimeout(run.processWorkQueue);\\n    }\\n  };\\n};\\n\\nif (goog.DEBUG) {\\n  /** Reset the work queue. Only available for tests in debug mode. */\\n  run.resetQueue = () => {\\n    workQueueScheduled = false;\\n    workQueue = new WorkQueue();\\n  };\\n\\n  /** Resets the scheduler. Only available for tests in debug mode. */\\n  run.resetSchedulerForTest = () => {\\n    initializeRunner();\\n  };\\n}\\n\\n/**\\n * Run any pending run work items. This function is not intended\\n * for general use, but for use by entry point handlers to run items ahead of\\n * nextTick.\\n */\\nrun.processWorkQueue = () => {\\n  // NOTE: additional work queue items may be added while processing.\\n  let item = null;\\n  while (item = workQueue.remove()) {\\n    try {\\n      item.fn.call(item.scope);\\n    } catch (e) {\\n      throwException(e);\\n    }\\n    workQueue.returnUnused(item);\\n  }\\n\\n  // There are no more work items, allow processing to be scheduled again.\\n  workQueueScheduled = false;\\n};\\n\\nexports = run;\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"WorkQueue\",\"require\",\"asyncStackTag\",\"nextTick\",\"throwException\",\"ASSUME_NATIVE_PROMISE\",\"define\",\"schedule\",\"workQueueScheduled\",\"workQueue\",\"run\",\"callback\",\"context\",\"undefined\",\"initializeRunner\",\"wrap\",\"add\",\"global\",\"Promise\",\"resolve\",\"promise\",\"then\",\"processWorkQueue\",\"forceNextTick\",\"realSetTimeout\",\"run.forceNextTick\",\"DEBUG\",\"resetQueue\",\"run.resetQueue\",\"resetSchedulerForTest\",\"run.resetSchedulerForTest\",\"run.processWorkQueue\",\"item\",\"remove\",\"fn\",\"call\",\"scope\",\"e\",\"returnUnused\",\"exports\"]\n}\n"]