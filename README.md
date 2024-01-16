## AWS DynamoDB Item Duplicator

This small NodeJS App allows you to clone items from AWS DynamoDB Tables from one region to another, main use cases being when you can't do it through AWS console itself, like an item from a table in `eu-west-1` to `cn-north-1`.

This app uses Express to create a simple webserver with a `/clone/:id` route, that given and object ID, will clone that into the desired region.

Currently, to run it, a couple of environment variables need to be configured previously:

```
AWS_CN_ACCESS_KEY_ID=
AWS_CN_SECRET_ACCESS_KEY=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

### Export variables from your .env file

export $(grep -v '^#' .env | xargs)
