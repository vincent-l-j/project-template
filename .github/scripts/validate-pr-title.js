// validate-pr-title.js
const conventionalCommitRegex = /^(revert: )?(feat|fix|docs|style|refactor|test|chore|ci)(\(.+\))?: .{1,100}/;

const prTitle = process.argv[2];

if (!conventionalCommitRegex.test(prTitle)) {
  console.error("error: Pull request title does not follow conventional commit format.");
  process.exit(1);
}
