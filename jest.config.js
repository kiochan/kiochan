const { getJestProjectsAsync } = '@nx/jest'

module.exports = async () => ({
  projects: await getJestProjectsAsync(),
})
