import { parseJSON } from './Parse';
import { readJSON } from './Read';

export function loadJSON ({
	path
}: {
 path: string
}) {
	const jsonString = readJSON({
		path
	});
	const jsonParsed = parseJSON({
		json: jsonString
	});
	return jsonParsed;
}
