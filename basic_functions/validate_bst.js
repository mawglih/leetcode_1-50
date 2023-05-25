function validate(node) {
    function recursiveValidate(n, min, max) {
        if(max !== null && n.data > max) return false;
        if(min !== null && n.data < min) return false;
        if(n.left && !recursiveValidate(n.left, min, n.data)) return false;
        if(n.right && !recursiveValidate(n.right, n.data, max)) return false;
        return true;
    }

    return recursiveValidate(node, null, null);
}