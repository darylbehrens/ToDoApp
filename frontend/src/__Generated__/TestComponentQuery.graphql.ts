/**
 * @generated SignedSource<<32b9325e0e891b3b8cb2ba204e9fa4a8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TestComponentQuery$variables = {};
export type TestComponentQuery$data = {
  readonly tasks: ReadonlyArray<{
    readonly id: number;
    readonly isCompleted: boolean;
    readonly title: string;
  }>;
};
export type TestComponentQuery = {
  response: TestComponentQuery$data;
  variables: TestComponentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "TaskItem",
    "kind": "LinkedField",
    "name": "tasks",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isCompleted",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TestComponentQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TestComponentQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a83f8fca17a2833d745c47aa34392b9d",
    "id": null,
    "metadata": {},
    "name": "TestComponentQuery",
    "operationKind": "query",
    "text": "query TestComponentQuery {\n  tasks {\n    id\n    title\n    isCompleted\n  }\n}\n"
  }
};
})();

(node as any).hash = "d5b4df53de77e20e6338f854fecdee40";

export default node;
