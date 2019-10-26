#!/bin/bash
CFG_TARGET_IP=172.16.250.101
DEST='/home/deployer/apps'
USER='deployer'
NAME=$(<'dist/app.txt')
ZIP="$NAME.zip"
OPTIONS="-q -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null"

scp $OPTIONS $ZIP $USER@$CFG_TARGET_IP:$DEST/
DT=$(date "+%Y%m%d%H%M.%S")

echo "Deploying..."
ssh $OPTIONS $USER@$CFG_TARGET_IP touch -a -m -t $DT $DEST/$ZIP

rm -r dist zip
rm $ZIP

echo "Finished WebApp deployment"
