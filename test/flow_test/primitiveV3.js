

import test from 'ava';
import { PrimitiveMessageV3 } from '../generated/examplecom/primitive_message_v3_pb';

test('proto3 - primitive', async t => {
  const msg = new PrimitiveMessageV3();
  t.is(msg.getMyDouble(), 0);
  t.is(msg.getMyFloat(), 0);
  t.is(msg.getMyInt32(), 0);
  t.is(msg.getMyInt64(), 0);
  t.is(msg.getMyUint32(), 0);
  t.is(msg.getMyUint64(), 0);
  t.is(msg.getMySint32(), 0);
  t.is(msg.getMySint64(), 0);
  t.is(msg.getMyFixed32(), 0);
  t.is(msg.getMyFixed64(), 0);
  t.is(msg.getMySfixed32(), 0);
  t.is(msg.getMySfixed64(), 0);
  t.is(msg.getMyBool(), false);
  t.is(msg.getMyString(), '');
  t.is(msg.getMyBytes(), '');
});
