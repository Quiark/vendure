#!/usr/bin/env bash

# assumes everything already built

set -euo pipefail

PACKDEST='../../../vendure-dist'

cd packages/

for i in admin-ui-plugin asset-server-plugin cli common core dev-server email-plugin job-queue-plugin payments-plugin ui-devkit
do
    pushd "$i"

    npm pack --pack-destination $PACKDEST

    popd
done

pushd admin-ui/package
npm pack --pack-destination "../$PACKDEST"
popd
