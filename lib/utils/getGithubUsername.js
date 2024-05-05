"use strict";
/** Function to get git username 🕵️‍♀️ */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGithubUsername = void 0;
const child_process_1 = require("child_process");
const getGithubUsername = () => {
  const gitUserEmail = (0, child_process_1.execSync)("git config --get user.email")
    .toString()
    .trim();

  const gitUserNameStr = (0, child_process_1.execSync)("git config --get user.name")
      .toString()
      .trim();

  const getValidGithubId = (email) => {
    const local = email.split("@")[0];
    return local.includes("+") ? local.split("+")[1] : local;
  }

  return getValidGithubId(gitUserEmail);
};
exports.getGithubUsername = getGithubUsername;
