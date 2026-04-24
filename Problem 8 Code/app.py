import streamlit as st
from bfs_dfs import bfs, dfs

st.title("Navigation System (BFS & DFS)")

graph = {
    'A': ['B', 'C'],
    'B': ['D'],
    'C': ['D'],
    'D': []
}

start = st.text_input("Start Node", "A")
goal = st.text_input("Goal Node", "D")

if st.button("Find Path"):
    st.write("BFS Path:", bfs(graph, start, goal))
    st.write("DFS Path:", dfs(graph, start, goal))
