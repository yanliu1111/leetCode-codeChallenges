const anArray = [3,5,1,8,7]

function writeADoublyLinkedList(linkedListHead){
    if (linkedListHead == null) 
        return console.log('null')

    console.log(linkedListHead.previous?.value || 'null', 
        '<-', linkedListHead.value, '->', 
        linkedListHead.next?.value || 'null')
    writeADoublyLinkedList(linkedListHead.next)
}

function recursivelyAddToDoublyLinkedList(array, index){
    if (index >= array.length) return null;
    const previousStartingNode = recursivelyAddToDoublyLinkedList(array, index+1)
    const newLink = {value: array[index], next: previousStartingNode, previous: null}
    if (previousStartingNode != null)
        previousStartingNode.previous = newLink;
    return newLink;
}

function createALinkedList(arr) {
    const linkedList = recursivelyAddToDoublyLinkedList(arr, 0)
    writeADoublyLinkedList(linkedList)
}

createALinkedList(anArray)