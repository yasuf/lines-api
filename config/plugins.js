module.exports = ({ env }) => {
  return {
    upload: {
      config: {
        provider: 'custom-aws-s3',
        providerOptions: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET"),
          region: env("AWS_REGION"),
          params: {
            Bucket: env("AWS_BUCKET")
          },
          localServer: {
            maxage: 300000
          }
        }
      }
    }
  };
}
