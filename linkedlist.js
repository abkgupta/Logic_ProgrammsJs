
class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function printList()
{
    var n = head;
    while(n!=null)
    {
        console.log(n.data+ "")
        n = n.next;
    }
}
var head = new Node(1);
var second = new Node(2);
var third = new Node(3);

head.next = second; // Link first node with the second node
second.next = third; // Link second node with the third node

printList();


