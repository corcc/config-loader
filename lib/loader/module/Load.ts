import { getPathFromProcess } from '../../path/process';
import { getPathFromSelf } from '../../path/self';
import { ModulePath } from './Type';

export function loadModule (_p?: ModulePath) {
	if (!_p) {
		throw Error(`Invalid path '${JSON.stringify(_p)}'`);
	}
	const l: string = (function (p: ModulePath): string {
		const {
			path,
			module,
			self,
			from,
			to
		}: any = p;
		if (
			typeof self != 'string'
		) {
			return getPathFromProcess({
				path
			});
		}
		try {
			return getPathFromSelf({
				module,
				self,
				from,
				to
			});
		} catch (e: any | ErrorEvent) {
			throw Error(e);
		}
	})(_p);
	const module: any = require(l);
	return module;
}
