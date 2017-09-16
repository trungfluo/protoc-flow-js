// @flow

/**
 * This is the ProtoC compiler plugin.
 *
 * It only accepts stdin/stdout output according to the protocol
 * specified in [plugin.proto](https://github.com/google/protobuf/blob/master/src/google/protobuf/compiler/plugin.proto).
 */

 import { CodeGeneratorRequest, CodeGeneratorResponse } from 'google-protobuf/google/protobuf/compiler/plugin_pb';
 import { FileDescriptorProto } from 'google-protobuf/google/protobuf/descriptor_pb';


// import {printFileDescriptorTSD} from "./ts/fileDescriptorTSD";
// import {ExportMap} from "./ExportMap";
// import {filePathFromProtoWithoutExtension, withAllStdIn} from "./util";
// import {CodeGeneratorRequest, CodeGeneratorResponse} from "google-protobuf/google/protobuf/compiler/plugin_pb";
// import {FileDescriptorProto} from "google-protobuf/google/protobuf/descriptor_pb";
// import {printFileDescriptorTSServices} from "./ts/fileDescriptorTSServices";

export function withAllStdIn(): void {  
  const ret: Buffer[] = [];
  let len = 0;

  const stdin = process.stdin;
  stdin.on('readable', function () {
    let chunk;

    while ((chunk = stdin.read())) {
      // if (!(chunk instanceof Buffer)) throw new Error('Did not receive buffer');
      // ret.push(chunk);
      // len += chunk.length;
      // process.stdout.write('data = ', chunk);

      const codeGenResponse = new CodeGeneratorResponse();
      const thisFile = new CodeGeneratorResponse.File();
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