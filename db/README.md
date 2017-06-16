# How to run db?

We use mongo as database. If you want to run our mongo instance with some sample data, please
install Docker first.

Next, you can simply run `./build_and_run_docker.sh` script and mongo instance on localhost:27017
should start.

In this project we use node-uuid results as payload of the "_id" field of every document. If you want to add
new mocked document please use node-uuid and generate ID for it.
