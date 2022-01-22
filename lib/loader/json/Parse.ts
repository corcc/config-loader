export function parseJSON ({
	json
}: {
	json: string,
}) {
	let parsed: any;
	try {
		parsed = JSON.parse(json);
	} catch (e: any | ErrorEvent) {
		const message = `Error while parse JSON
		 from value
			'${json}'`;
		throw Error(message);
	}
	return parsed;
}
