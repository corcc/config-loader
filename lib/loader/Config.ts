import { loadModule } from './Module';
type s = string;
export function loadConfig (_p?: s) {
	const i: s = _p ?? 'Config';
	const { config }: any = loadModule(i);
	if (!config) {
		throw Error('Invalid Configuration');
	}
	return config;
}
