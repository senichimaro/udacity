# Project Notes

curl -X PUT -d '{"type":"user","name":"root","roles":["_admin"],"roles":[],"password":"toor"}' 10.10.10.10:5984/_users/org.couchdb.user:root -H "Content-Type:application/json"