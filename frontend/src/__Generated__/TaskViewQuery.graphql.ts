/**
 * @generated SignedSource<<822847b5bd455416ed267069f30f41b7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TaskViewQuery$variables = {};
export type TaskViewQuery$data = {
  readonly tasks: ReadonlyArray<{
    readonly id: number;
    readonly isCompleted: boolean;
    readonly title: string;
  }>;
};
export type TaskViewQuery = {
  response: TaskViewQuery$data;
  variables: TaskViewQuery$variables;
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
    "name": "TaskViewQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TaskViewQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8da78d64c46642094563dea0ff3a0d79",
    "id": null,
    "metadata": {},
    "name": "TaskViewQuery",
    "operationKind": "query",
    "text": "query TaskViewQuery {\n  tasks {\n    id\n    title\n    isCompleted\n  }\n}\n"
  }
};
})();

(node as any).hash = "7e45b3726c6715cc03d29c515814e185";

export default node;
