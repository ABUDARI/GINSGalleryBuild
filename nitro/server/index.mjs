import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import { t as trapUnhandledNodeErrors, a as toNodeListener, u as useNitroApp } from './chunks/_/nitro.mjs';
import 'node:crypto';
import 'node:http';
import 'node:https';
import '@iconify/utils';
import 'consola/core';
import 'node:fs';
import 'node:path';

const nitroApp = useNitroApp();
const listener = toNodeListener(nitroApp.h3App);
const websocket = void 0;
const handler = listener;
trapUnhandledNodeErrors();

export { handler, listener, websocket };
//# sourceMappingURL=index.mjs.map
