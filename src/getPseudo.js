
function getPseudo(id) {
    let strings = [];
    if (id === 1) {
        strings.push('for i=1 to ArrayLength-1');
        strings.push('\u2003if (leftElement > rightElement)');
        strings.push('\u2003\u2003swap (leftElement, rightElement)');
    }
    else if (id === 2) {
        strings.push('for i=1 to ArrayLength-1');
        strings.push('\u2003key = Extract ith element');
        strings.push('\u2003while (leftElement > key)');
        strings.push('\u2003\u2003shift leftElement to right by 1 place');
        strings.push('\u2003place key at this index');
    }
    else if (id === 3) {
        strings.push('pivot = partition lastElement; index = partition startIndex-1');
        strings.push('for i=startIndex to endIndex-1');
        strings.push('\u2003if(arr[i] < pivot)');
        strings.push('\u2003\u2003 index++; swap (arr[i], arr[index])');
        strings.push('swap(pivot, arr[index+1]');
    }
    else if (id === 4) {
        strings.push('create max Heap of Array');
        strings.push('for i=ArrayLength-1 to 1');
        strings.push('\u2003key = ith element');
        strings.push('\u2003swap (firstElement, key)');
        strings.push('\u2003heapify remaining array');
    }
    else if (id === 5) {
        strings.push('divide array into smaller partitions');
        strings.push('merge called on adjacent partitions (left and right)');
        // strings.push('split partition into left and right');
        strings.push('if leftHead <= rightHead : copy leftHead');
        strings.push('else: copy rightHead');
        strings.push('place back elements into array');
    }
    return strings;
}

export default getPseudo;