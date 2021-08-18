'use strict'
const tree = {
    "left": {
        "left": {
            "left": {
                "left": null,
                "right": null,
                "data": 1
            },
            "right": null,
            "data": 7
        },
        "right": null,
        "data": 8
    },
    "right": {
        "left": {
            "left": {
                "left": null,
                "right": null,
                "data": 11
            },
            "right": null,
            "data": 14
        },
        "right": {
            "left": null,
            "right": {
                "left": null,
                "right": null,
                "data": 50
            },
            "data": 20
        },
        "data": 15
    },
    "data": 10
};

console.log(tree);

function printLeaves(root) {
    if (root === null) {
        return
    }
    if (root.left === null && root.right === null) {
        console.log(root.data )
        return 
    }
    if (root.left !== null) {
        printLeaves(root.left)
    }
    if (root.right !== null) {
        printLeaves(root.right)
    }
}

printLeaves(tree)