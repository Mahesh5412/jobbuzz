#!/bin/bash
r=$(sudo docker ps --format "{{.Names}}" | grep jobbuzzback)
if [ "$r" != "" ]; then 
sudo docker service rm jobbuzzback
fi 
sudo docker build -t jobbuzzback .
sudo docker service create --name jobbuzzback --network my-network -d -p 4000:3000 jobbuzzback