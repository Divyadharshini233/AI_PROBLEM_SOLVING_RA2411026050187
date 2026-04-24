import streamlit as st
from map_coloring import backtracking

st.title("Map Coloring Problem")

graph = {
    'A': ['B', 'C'],
    'B': ['A', 'C', 'D'],
    'C': ['A', 'B', 'D'],
    'D': ['B', 'C']
}

colors = ['Red', 'Green', 'Blue']

if st.button("Solve"):
  
    result = backtracking(graph, colors, {})
    st.write(result)
