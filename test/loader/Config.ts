
const {
	from,
	to
} = {
	from: 'test',
	to: 'lib'
};
export const json = {
	loadJSON: [{
		path: 'tsconfig'
	}, {
		path: 'package'
	}, {
		path: 'package-lock'
	}]
};
export const config = {
	loadConfig: [{
		path: 'example.Config'
	}]
};
export const module = {
	loadModule: [{
		path: 'Package'
	}, {
		module: 'Load',
		self: `${require('path').join(__dirname, 'json')}`,
		from,
		to
	}]
};
