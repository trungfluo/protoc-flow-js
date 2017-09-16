'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withAllStdIn = withAllStdIn;

var _plugin_pb = require('google-protobuf/google/protobuf/compiler/plugin_pb');

var _descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb');

// import {printFileDescriptorTSD} from "./ts/fileDescriptorTSD";
// import {ExportMap} from "./ExportMap";
// import {filePathFromProtoWithoutExtension, withAllStdIn} from "./util";
// import {CodeGeneratorRequest, CodeGeneratorResponse} from "google-protobuf/google/protobuf/compiler/plugin_pb";
// import {FileDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
// import {printFileDescriptorTSServices} from "./ts/fileDescriptorTSServices";

//      

/**
 * This is the ProtoC compiler plugin.
 *
 * It only accepts stdin/stdout output according to the protocol
 * specified in [plugin.proto](https://github.com/google/protobuf/blob/master/src/google/protobuf/compiler/plugin.proto).
 */

function withAllStdIn() {
  var ret = [];
  var len = 0;

  var stdin = process.stdin;
  stdin.on('readable', function () {
    var chunk = void 0;

    while (chunk = stdin.read()) {
      // if (!(chunk instanceof Buffer)) throw new Error('Did not receive buffer');
      // ret.push(chunk);
      // len += chunk.length;
      // process.stdout.write('data = ', chunk);

      var codeGenResponse = new _plugin_pb.CodeGeneratorResponse();
      var thisFile = new _plugin_pb.CodeGeneratorResponse.File();
      thisFile.setName('hey.js');
      thisFile.setContent("//sfqsefqse");
      codeGenResponse.addFile(thisFile);
    }
  });

  // stdin.on("end", function () {
  //   callback(Buffer.concat(ret, len));
  // });
}

withAllStdIn();