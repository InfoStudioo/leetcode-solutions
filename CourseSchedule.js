/*
Difficulty: Medium
Category: Graph, Topological Sort, BFS, Cycle Detection

Problem: There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
You are given an array prerequisites where prerequisites[i] = [aᵢ, bᵢ] indicates that you must
 take course bᵢ before course aᵢ.

Return true if you can finish all courses. Otherwise, return false.

*/

function canFinish(numCourses, prerequisites) {
    const graph = Array.from({ length: numCourses }, () => []);
    const inDegree = new Array(numCourses).fill(0);

    for (let [course, pre] of prerequisites) {
        graph[pre].push(course);
        inDegree[course]++;
    }

    const queue = [];

    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    let completed = 0;

    while (queue.length) {
        const course = queue.shift();
        completed++;

        for (let next of graph[course]) {
            inDegree[next]--;
            if (inDegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    return completed === numCourses;
}

// ✅ Test Cases
console.log(canFinish(2, [[1, 0]])); // true
console.log(canFinish(2, [[1, 0], [0, 1]])); // false
console.log(canFinish(4, [[1,0],[2,1],[3,2]])); // true
console.log(canFinish(3, [[1,0],[2,1],[0,2]])); // false
