import path from 'path';
import {
	loadModule as __loadModule
} from '../../lib';

function getSelf (p: string): string {
	const _j: string = path.join(path.resolve(__dirname), `./${p}`);
	const _r: string = path.resolve(_j);
	return _r;
}
const { loadJSON } = __loadModule({
	module: 'index',
	self: getSelf('json'), // Load loadJSON by loadModule
	from: 'test',
	to: 'lib'
});
const pkgJSON = loadJSON({
	path: 'package' // Load JSON from pacakge.json by loadJSON
});
const tsconfigJSON = loadJSON({
	path: 'tsconfig' // Load JSON from tsconfig.json by loadJSON
});

const { loadConfig } = __loadModule({
	module: 'index',
	self: getSelf('config'), // Load loadConfig by loadModule
	from: 'test',
	to: 'lib'
});
const cfgMod = loadConfig({
	path: 'example.Config'
});

const { loadModule } = __loadModule({
	module: 'index',
	self: getSelf('module'),
	from: 'test',
	to: 'lib'
});
const pkgMod = loadModule({
	path: 'Package'
});

console.log({
	pkgJSON,
	tsconfigJSON,
	cfgMod,
	pkgMod
});
