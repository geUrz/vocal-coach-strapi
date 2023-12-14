module.exports = () => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: 'AKIA5Z6VK2MAVBWZYSNV',
          secretAccessKey: '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',
          region: 'us-west-1',
          params: {
            ACL: 'public-read',
            signedUrlExpires: 15 * 60,
            Bucket: 'vocalcoach-server-strapi',
          },
        },
      },
    },
  },
});