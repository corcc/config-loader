import { loadModule } from '../module';
export function loadConfig ({
	path
}: {
	path?: string
}) {
	const { config }: any = loadModule({
		path: path ?? 'Config'
	});
	if (!config) {
		throw Error('Invalid Configuration');
	}
	return config;
}
