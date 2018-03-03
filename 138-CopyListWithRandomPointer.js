/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */

function RandomListNode(label) {
    this.label = label;
    this.next = this.random = null;
}

var copyRandomList = function(head) {
    if(!head) return null;

    let hashMap = new Map();
    let ans = [];
    let node = head;

    while(node) {
        hashMap.set(node, ans.length);
        ans.push(new RandomListNode(node.label));
        node = node.next;
    }

    node = head;

    for(var i = 0; i<ans.length; i++) {
        // define the next of each
        if(i != ans.length - 1) {
            ans[i].next = ans[i+1];
        }

        // node.random is also a node
        let random = node.random;
        let index = hashMap.get(random);
        if (index !== undefined) {
            ans[i].random = ans[index];
        }
    
        node = node.next;
    }

    return ans[0];
};

