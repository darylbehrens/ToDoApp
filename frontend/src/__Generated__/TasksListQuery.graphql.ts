/**
 * @generated SignedSource<<4ed8fa7f3e8e3990d0ebee5334a8af13>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TasksListQuery$variables = {};
export type TasksListQuery$data = {
  readonly tasks: ReadonlyArray<{
    readonly id: string;
    readonly isCompleted: boolean;
    readonly title: string;
  }>;
};
export type TasksListQuery = {
  response: TasksListQuery$data;
  variables: TasksListQuery$variables;
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
    "name": "TasksListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TasksListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8e974fc1126ebffc8e6a92ad6c3eb478",
    "id": null,
    "metadata": {},
    "name": "TasksListQuery",
    "operationKind": "query",
    "text": "query TasksListQuery {\n  tasks {\n    id\n    title\n    isCompleted\n  }\n}\n"
  }
};
})();

(node as any).hash = "f7718346972cf8a576dd1436b41f0d9a";

export default node;
