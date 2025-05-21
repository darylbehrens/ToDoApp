/**
 * @generated SignedSource<<43c4e1267781b5955eeb6b2305e6b12c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateTaskInput = {
  id: number;
  isCompleted: boolean;
};
export type UpdateTaskMutation$variables = {
  input: UpdateTaskInput;
};
export type UpdateTaskMutation$data = {
  readonly updateTaskStatus: {
    readonly id: string;
    readonly isCompleted: boolean;
  };
};
export type UpdateTaskMutation = {
  response: UpdateTaskMutation$data;
  variables: UpdateTaskMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "TaskItem",
    "kind": "LinkedField",
    "name": "updateTaskStatus",
    "plural": false,
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
        "name": "isCompleted",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateTaskMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateTaskMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "294cf83c88b24089224351d4be102235",
    "id": null,
    "metadata": {},
    "name": "UpdateTaskMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateTaskMutation(\n  $input: UpdateTaskInput!\n) {\n  updateTaskStatus(input: $input) {\n    id\n    isCompleted\n  }\n}\n"
  }
};
})();

(node as any).hash = "f81eba652ef7e141d60cf83329a537b0";

export default node;
