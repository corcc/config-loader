import { getPath } from '../Path';
type s = string;
export function loadModule (_p?: s) {
	if (!_p) {
		throw Error(`Invalid path '${_p}'`);
	}
	const l: s = getPath(_p);
	const module: any = require(l);
	return module;
}
