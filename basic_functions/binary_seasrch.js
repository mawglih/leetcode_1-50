var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while(l <= r) {
        const m = ~~(l / 2 + r / 2); // binary search to the left
        nums[m] < target ? l = m + 1 : r = m - 1; // if target does not exist index of where to place it returned
    }
    return l;
}