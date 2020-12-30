const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

try {
  const image = 'adriengentil/hello-actions'
  exec.exec('docker', ['build', '-t', image, '.'])
           .then((res) => {
                   if (res === 0) {
                   exec.exec('docker', ['push', image])
                   }
                   else {
                     core.setFailed(`Action failed cannot build docker image`);
                   }
                 });
} catch (error) {
  core.setFailed(error.message);
}

