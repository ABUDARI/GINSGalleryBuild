module.exports = {
  apps: [
    {
      name: 'ginsgallery',
      port: '3514',
      script: './nitro/server/index.mjs',
      instances: 'max', // Set the number of instances or 'max' for maximum available CPUs
      exec_mode: 'cluster' // Set execution mode to 'cluster'
    }
  ]
}
