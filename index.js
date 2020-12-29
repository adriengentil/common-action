const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

try {
  const dockerhubUsername = 'adriengentil'
  const dockerhubPassword = core.getInput('dockerhub-password');
  console.log(`Log in to dockerhub with ${dockerhubUsername} / ${dockerhubPassword}`);
  exec.exec('docker', ['login', '--username', dockerhubUsername, '--password', dockerhubPassword]);
} catch (error) {
  core.setFailed(error.message);
}

