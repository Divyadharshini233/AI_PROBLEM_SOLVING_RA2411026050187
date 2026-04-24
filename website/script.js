// -------- Helper: Convert input string to graph --------
function parseGraph(input) {
    let graph = {};
    let parts = input.split(";");

    for (let part of parts) {
        let [node, neighbors] = part.split(":");
        node = node.trim();
        if (!node) continue;

        graph[node] = neighbors
            ? neighbors.split(",").map(n => n.trim()).filter(n => n)
            : [];
    }

    return graph;
}


// -------- Problem 5: Map Coloring --------
function solveMap() {
    let input = document.getElementById("mapInput").value;
    let graph = parseGraph(input);

    let colors = ["Red", "Green", "Blue"];
    let result = {};

    function isValid(node, color) {
        for (let neighbor of graph[node]) {
            if (result[neighbor] === color) return false;
        }
        return true;
    }

    function backtrack(nodes) {
        if (nodes.length === 0) return true;

        let node = nodes[0];

        for (let color of colors) {
            if (isValid(node, color)) {
                result[node] = color;
                if (backtrack(nodes.slice(1))) return true;
                delete result[node];
            }
        }
        return false;
    }

    backtrack(Object.keys(graph));

    document.getElementById("mapOutput").innerText =
        "Color Assignment: " + JSON.stringify(result);
}


// -------- Problem 8: BFS & DFS --------
function runSearch() {
    let input = document.getElementById("graphInput").value;
    let graph = parseGraph(input);

    let start = document.getElementById("startNode").value.trim();
    let goal = document.getElementById("goalNode").value.trim();

    function bfs(start, goal) {
        let queue = [[start]];
        let visited = new Set();

        while (queue.length) {
            let path = queue.shift();
            let node = path[path.length - 1];

            if (node === goal) return path;

            if (!visited.has(node)) {
                visited.add(node);
                for (let n of graph[node] || []) {
                    queue.push([...path, n]);
                }
            }
        }
        return "No Path";
    }

    function dfs(start, goal) {
        let stack = [[start]];
        let visited = new Set();

        while (stack.length) {
            let path = stack.pop();
            let node = path[path.length - 1];

            if (node === goal) return path;

            if (!visited.has(node)) {
                visited.add(node);
                for (let n of graph[node] || []) {
                    stack.push([...path, n]);
                }
            }
        }
        return "No Path";
    }

    document.getElementById("bfsOutput").innerText =
        "BFS Path: " + bfs(start, goal);

    document.getElementById("dfsOutput").innerText =
        "DFS Path: " + dfs(start, goal);
}
