module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: 'littlewin.wang',
      script: 'node_modules/nuxt/bin/nuxt-start',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: '3100'
      }
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: 'littlewin',
      host: '119.29.68.183',
      ref: 'origin/master',
      repo: 'git@github.com:littlewin-wang/littlewin.wang.git',
      path: '/home/littlewin/littlewin.wang/production',
      'post-deploy': 'git pull && npm install && npm run generate && pm2 reload ecosystem.config.js --env production'
    }
  }
}
