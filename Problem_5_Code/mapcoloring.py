def is_valid(node, color, assignment, graph):
    for neighbor in graph[node]:
        if assignment.get(neighbor) == color:
            return False
    return True

def backtracking(graph, colors, assignment):
    if len(assignment) == len(graph):
        return assignment

    node = [n for n in graph if n not in assignment][0]

    for color in colors:
        if is_valid(node, color, assignment, graph):
            assignment[node] = color
            result = backtracking(graph, colors, assignment)
            if result:
                return result
            del assignment[node]

    return None
