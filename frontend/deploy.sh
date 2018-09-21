#!/bin/bash
distId=$(aws cloudfront list-distributions --profile personal|grep -B4 '"tjedens.com"'|grep ARN|cut -d'/' -f2|cut -d'"' -f1)

npm run build
aws s3 sync dist/ s3://tjedens-photo-portfolio --profile personal
aws cloudfront create-invalidation --distribution-id $distId --paths '/*' --profile personal
rm -rf dist/
