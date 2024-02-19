const { Octokit } = require('octokit');
const expect = require('@wdio/globals').expect;

const githubApi = async () => {
  const octokit = new Octokit({
    auth: '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',
  });

  const res = await octokit.request('POST /user/repos', {
    name: 'Repo-Over-Api',
    description: 'Repository created over octokit!',
    homepage: 'https://github.com',
    private: false,
    is_template: true,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  expect(await res.status).toBe(201);
  await driver.pause(1000);
};

module.exports = githubApi;
