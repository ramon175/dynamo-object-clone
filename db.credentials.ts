type Config = {
  row: {
    region: string;
    credentials: {
      accessKeyId: string;
      secretAccessKey: string;
    };
  };
  cn: {
    region: string;
    credentials: {
      accessKeyId: string;
      secretAccessKey: string;
    };
  };
};

export const config: Config = {
  row: {
    region: "eu-west-1",
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
  },
  cn: {
    region: "cn-north-1",
    credentials: {
      accessKeyId: process.env.AWS_CN_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_CN_SECRET_ACCESS_KEY!,
    },
  },
};
