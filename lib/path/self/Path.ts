import {
	cwd
} from '../Path';

const { r, j } = {
	r: require('path').resolve,
	j: require('path').join
};
export function getPathFromSelf ({
	module,
	self,
	from,
	to
}: {
	module: string,
	self: string,
	from: string,
	to: string
}) {
	const sourceDir: string = self;
	const targetDir: string = r(sourceDir.replace(from, to));
	const targetPath: string = r(j(targetDir, module));
	return targetPath;
}
