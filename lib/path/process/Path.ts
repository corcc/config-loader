import {
	cwd
} from '../Path';
const { r, j } = {
	r: require('path').resolve,
	j: require('path').join
};
export function getPathFromProcess ({
	path
}: {
	path: string
}) {
	return r(j(cwd, path));
}
