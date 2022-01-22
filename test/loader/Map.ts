
import { loadModule } from '../../lib/loader/module';
import {
	json,
	config,
	module
} from './Config';
const oe = Object.entries;
const fe = Object.fromEntries;
const loads = {
	index: {
		json,
		config,
		module
	}
};
const loadResults = fe(oe(loads).map(([
	filename, options
]: any): any => {
	const fileResult = fe(oe(options).map(([
		dir, options
	]: any): any => {
		const dirResults = fe(oe(options).map(([
			fn, params
		]: any): any => {
			const testFunction: Function | undefined = loadModule({
				module: filename,
				self: `${require('path').join(__dirname, dir)}`,
				from: 'test',
				to: 'lib'
			})[fn];
			const testResults: any = fe(params.map((
				testParam: any,
				index: number
			): any => {
				const result = (
					testFunction
						? testFunction(
							testParam
						)
						: testFunction
				);
				return [`test${index}`, result];
			}));
			return [fn, testResults];
		}));
		return [dir, dirResults];
	}));
	return [filename, fileResult];
}));
console.log(
	JSON.stringify(
		loadResults, null, 2
	)
);
