export const config = {
  token: window.roamFiles.GITHUB_ACCESS_TOKEN || '',
  repo: window.roamFiles.repo || 'JimmyLv/images',
  branch: window.roamFiles.branch || 'master',
  savePath: window.roamFiles.savePath || new Date().getFullYear().toString(),
};