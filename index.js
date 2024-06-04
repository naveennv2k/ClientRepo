import * as core from "@actions/core";
const envName = 'MY_VARIABLE';
const secretValue = 'its working';
core.exportVariable(envName, secretValue);
