module.exports = {
  apps: [{
    name: 'mvp-angularJs',
    script: './bin/www.js',
    env: {
      NODE_ENV: 'development',
      PORT: 3000
    },
    env_hml: {
      NODE_ENV: 'homologation',
      PORT: 3001
    },
    env_prd: {
      NODE_ENV: 'production',
      PORT: 3030
    }
  }]
};
