const newrelic = require("newrelic");

for (let i = 0; i < 5; i++) {
	newrelic.recordLogEvent({ message: `version:${2} stream:${i} projectID]d:${i + 12}` });
}
