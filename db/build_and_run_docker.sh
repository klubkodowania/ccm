#!/bin/bash

docker stop ccm-db

docker rm ccm-db

docker rmi ccm-mongo-image

docker build -t ccm-mongo-image .

echo "Image created."

docker run -d -p 27017:27017 --name ccm-db ccm-mongo-image

echo "Container started with."

docker exec ccm-db mongoimport --db ccm --collection students --file /tmp/students.json --type json --jsonArray
docker exec ccm-db mongoimport --db ccm --collection semesters --file /tmp/semesters.json --type json --jsonArray
docker exec ccm-db mongoimport --db ccm --collection projects --file /tmp/projects.json --type json --jsonArray

echo "Seed data imported to the ccm db."

