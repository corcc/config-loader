const { r, j } = {
	r: require('path').resolve,
	j: require('path').join
};
const _cwd = getProcessPath();
export function getProcessPath () {
	return process.cwd();
}
export function getPath (_p: string) {
	return r(j(_cwd, _p));
}
