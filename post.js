const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

try {
  const image = 'adriengentil/hello-actions'
  exec.exec('docker', ['build', '-t', image, '.'])
           .then(exec.exec('docker', ['push', image]));
} catch (error) {
  core.setFailed(error.message);
}

