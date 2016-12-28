#!/bin/bash

docker rmi ccm-mongo-image

docker build -t ccm-mongo-image .

echo "Image created."

docker rm ccm-db

docker run -d -p 27017:27017 --name ccm-db ccm-mongo-image

echo "Container started with."

docker exec ccm-db mongoimport --db ccm --collection users --file /tmp/seed.json --type json --jsonArray

echo "Seed data imported to the ccm.users."

