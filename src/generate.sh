#!/bin/bash -x

if [ -d generated ]
then
    rm -rf generated/
fi
mkdir generated

protoc \
  --plugin=protoc-gen-flow=./bin/protoc-gen-flow \
  --js_out=import_style=commonjs,binary:generated \
  --flow_out=generated \
  -I ./test/proto \
  ./test/proto/othercom/*.proto \
  ./test/proto/examplecom/*.proto \
  ./test/proto/*.proto