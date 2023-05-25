class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    
    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(node => node.data != data);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    bfs(fn) {
       const arr = this.root;
       while(arr.length) {
        const node = arr.shift();
        arr.push(...node.children);
        fn(node);
       } 
    }

    dfs(fn) {
        const arr = this.root;
        while(arr.length) {
            const node = arr.shift();
            arr.unshift(...node.children);
            fn(node);
        }
    }
}

module.exports = { Node, Tree };