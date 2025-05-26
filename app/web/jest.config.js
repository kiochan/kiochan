import nxPreset from '@nx/jest/preset/index.js'

export default {
  ...nxPreset.default,
  displayName: 'app-web',
  transform: {
    ...nxPreset.transform,
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/app-web',
}
