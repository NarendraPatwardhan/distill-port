export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.BbauxGOd.js",app:"_app/immutable/entry/app.8F3y6XFy.js",imports:["_app/immutable/entry/start.BbauxGOd.js","_app/immutable/chunks/BpZQiHpV.js","_app/immutable/chunks/BHv7PTUV.js","_app/immutable/chunks/C_HqjdFS.js","_app/immutable/entry/app.8F3y6XFy.js","_app/immutable/chunks/CxXGczn5.js","_app/immutable/chunks/BHv7PTUV.js","_app/immutable/chunks/B-7eqPAb.js","_app/immutable/chunks/BUwHqCMF.js","_app/immutable/chunks/C_HqjdFS.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
