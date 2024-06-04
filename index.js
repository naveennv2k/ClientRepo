const core = require('@actions/core');

const envName = 'MY_VARIABLE';
const secretValue = 'its working';
core.exportVariable(envName, secretValue);
