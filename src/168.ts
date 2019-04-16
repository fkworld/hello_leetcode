/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 *
 * https://leetcode-cn.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (30.46%)
 * Total Accepted:    6.9K
 * Total Submissions: 21.8K
 * Testcase Example:  '1'
 *
 * 给定一个正整数，返回它在 Excel 表中相对应的列名称。
 * 
 * 例如，
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * 示例 1:
 * 
 * 输入: 1
 * 输出: "A"
 * 
 * 
 * 示例 2:
 * 
 * 输入: 28
 * 输出: "AB"
 * 
 * 
 * 示例 3:
 * 
 * 输入: 701
 * 输出: "ZY"
 * 
 * 
 */

const SList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

/**
 * @param {number} n
 * @return {string}
 */
export const convertToTitle = (n: number): string => {
    let s = []
    for (; ;) {
        n -= 1
        s.unshift(SList[n % 26])
        n = Math.trunc(n / 26)
        if (n === 0) {
            break;
        }
    }
    return s.join("")
};

// test
console.log(convertToTitle(701))

