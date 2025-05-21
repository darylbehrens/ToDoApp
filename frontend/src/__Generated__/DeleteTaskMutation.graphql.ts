/**
 * @generated SignedSource<<b3e6c311a0a5c5cc5067058e8539baf4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteTaskInput = {
  id: number;
};
export type DeleteTaskMutation$variables = {
  input: DeleteTaskInput;
};
export type DeleteTaskMutation$data = {
  readonly deleteTask: {
    readonly deletedTaskId: number;
  };
};
export type DeleteTaskMutation = {
  response: DeleteTaskMutation$data;
  variables: DeleteTaskMutation$variables;
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
    "concreteType": "DeleteTaskPayload",
    "kind": "LinkedField",
    "name": "deleteTask",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "deletedTaskId",
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
    "name": "DeleteTaskMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteTaskMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "14ec0482923f64d05795aa7718160bc4",
    "id": null,
    "metadata": {},
    "name": "DeleteTaskMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTaskMutation(\n  $input: DeleteTaskInput!\n) {\n  deleteTask(input: $input) {\n    deletedTaskId\n  }\n}\n"
  }
};
})();

(node as any).hash = "6193795912185c470b0b6fdd6c0e4f80";

export default node;
