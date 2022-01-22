import { getPathFromProcess } from '../../path/process';
import fs from 'fs';
export function readJSON ({
	path
}: {
	path: string
}) {
	const fullPath: string = getPathFromProcess({
		path: `${path}.json`
	});
	let readBuffer: Buffer | undefined;
	let readString: string | undefined;
	let filterString: string | undefined;
	try {
		readBuffer = fs.readFileSync(`${fullPath}`);
		readString = readBuffer.toString();
		filterString = readString.split('\n').filter((_: string) => {
			const t = _.trim();
			const nt = (function () {
				let tn = t;
				while (tn.indexOf('\t') > -1) {
					tn = tn.replace('\t', '');
				}
				return tn;
			})();
			return !nt.startsWith('/');
		}).map((s: string): string => {
			const f = s.indexOf('/*');
			const l = s.lastIndexOf('*/', f);
			if (
				f > -1 &&
				l > -1
			) {
				return s;
			}
			const r: any = s.substring(f, l);
			const a: string = s.replace(r, '');
			return a.startsWith('/') ? r : a;
		}).join('\n');
	} catch (e: any | ErrorEvent) {
		throw Error(
			`Error while read JSON FIle '${fullPath}'`
		);
	}
	return filterString;
}
