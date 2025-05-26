/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-require-imports */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next/plugins/with-nx')
const path = require('node:path')
const fs = require('node:fs')
const packageJson = require('./package.json')

const JSON_INDENT = 2
const distDir = '../../dist/app-web'

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  distDir,
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.afterEmit.tap('GeneratePackageJson', () => {
            const outputDir = path.join(__dirname, distDir)
            const jsonFilePath = path.join(outputDir, 'package.json')

            if (!fs.existsSync(outputDir)) {
              fs.mkdirSync(outputDir, { recursive: true })
            }

            let jsonFileContent = {}

            if (fs.existsSync(jsonFilePath)) {
              try {
                jsonFileContent = JSON.parse(
                  fs.readFileSync(jsonFilePath, 'utf-8'),
                )
              } catch (error) {
                console.warn(
                  `Failed to read existing package.json at "${jsonFilePath}". Continuing with a fresh one.`,
                )
              }
            }

            // 写入新的 package.json
            fs.writeFileSync(
              jsonFilePath,
              JSON.stringify(
                { ...packageJson, ...jsonFileContent },
                null,
                JSON_INDENT,
              ),
            )

            console.log(`Generated package.json at "${jsonFilePath}"`)
          })
        },
      })
    }
    return config
  },
}

module.exports = withNx(nextConfig)
