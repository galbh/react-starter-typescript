#! /usr/bin/env bash -e

CREDENTIALS="gal.benhaim@solaredge.com:1234"
HOST="http://localhost:8080/api/internal/"

function build_shpan_city {
	
	URL="shpan-vendor/commands/build-shpan-city"
	DATA="{ 
		\"utilityName\" : \"mock shpan city\", 
		\"cityName\" : \"gals\", 
		\"cityCenterLongitude\" : 139.839478, 
		\"cityCenterLatitude\" : 35.652832 
	}"
	METHOD="POST"
	echo "Shpan city was created"
	fetch $URL, $DATA, $METHOD
}

function build_shpan_village {
	URL="shpan-vendor/commands/build-shpan-village"
	DATA="{ \"utilityName\" : \"mock shapn village\" }"
	METHOD="POST"
	echo "Shpan village was created"
	fetch $URL, $DATA, $METHOD
}

function wait_for_server {
	HEADER="Content-Type:application/json"
	URL="user-info"
	METHOD="GET"

	while true
	do
		fetch $URL, $DATA, $METHOD
	if [ $STATUS -eq 200 ]; then
			echo "server is ready."
			break
		else
			echo "status: "$STATUS ", server is not ready yet, retrying ..."
		fi
		sleep 5
	done
}

function fetch() {
	HEADER="Content-Type:application/json"
	STATUS=$(curl -s -o /dev/null -w '%{http_code}' --request "$METHOD" --header "$HEADER" --data "$DATA" --url "$HOST$URL" --user $CREDENTIALS)
	return "$STATUS"
}

wait_for_server
build_shpan_city
build_shpan_village
