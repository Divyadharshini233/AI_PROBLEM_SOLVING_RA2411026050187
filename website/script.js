// -------- Problem 5: Map Coloring --------

function solveMap() {
    const graph = {
        A: ["B", "C"],
        B: ["A", "C", "D"],
        C: ["A", "B", "D"],
        D: ["B", "C"]
    };

    const colors = ["Red", "Green", "Blue"];
    const result = {};

    function isValid(node, color) {
        for (let neighbor of graph[node]) {
            if (result[neighbor] === color) {
                return false;
            }
        }
        return true;
    }

    function solve(nodes) {
        if (nodes.length === 0) return true;

        let node = nodes[0];

        for (let color of colors) {
            if (isValid(node, color)) {
                result[node] = color;
                if (solve(nodes.slice(1))) return true;
                delete result[node];
            }
        }
        return false;
    }

    solve(Object.keys(graph));

    document.getElementById("mapOutput").innerText =
        "Color Assignment: " + JSON.stringify(result);
}


// -------- Problem 8: BFS & DFS --------

function runSearch() {
    const graph = {
        A: ["B", "C"],
        B: ["D"],
        C: ["D"],
        D: []
    };

    function bfs(start, goal) {
        let queue = [[start]];
        let visited = new Set();

        while (queue.length > 0) {
            let path = queue.shift();
            let node = path[path.length - 1];

            if (node === goal) return path;

            if (!visited.has(node)) {
                visited.add(node);
                for (let neighbor of graph[node]) {
                    queue.push([...path, neighbor]);
                }
            }
        }
        return null;
    }

    function dfs(start, goal) {
        let stack = [[start]];
        let visited = new Set();

        while (stack.length > 0) {
            let path = stack.pop();
            let node = path[path.length - 1];

            if (node === goal) return path;

            if (!visited.has(node)) {
                visited.add(node);
                for (let neighbor of graph[node]) {
                    stack.push([...path, neighbor]);
                }
            }
        }
        return null;
    }

    document.getElementById("bfsOutput").innerText =
        "BFS Path: " + bfs("A", "D");

    document.getElementById("dfsOutput").innerText =
        "DFS Path: " + dfs("A", "D");
}
