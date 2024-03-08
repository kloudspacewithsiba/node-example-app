import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3";
const client = new S3Client({
    region: "eu-west-2"
});

(async function main(){
    console.log('Hello World')
    const result = await client.send(new ListBucketsCommand({}));
    console.log("RESULT::", result.Buckets)
 })()