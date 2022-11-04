import java.util.ArrayList;

public class Graph {
    
    private ArrayList<Vertex> vertices;
    private boolean isWeighted;
    private boolean isDirected;
    
    public Graph(boolean inputIsWeighted, boolean inputIsDirected) {
        this.vertices = new ArrayList<>();
        this.isWeighted = inputIsWeighted;
        this.isDirected = inputIsDirected;
    }
    
    public Vertex addVertex(String data) {
        Vertex newVertex = new Vertex(data);
        vertices.add(newVertex);
        return newVertex;
    }
    
    public void addEdge(Vertex vertex1, Vertex vertex2, Integer weight) {
        if (!isWeighted) {
            weight = null;
        }
        vertex1.addEdge(vertex2, weight);
        if (!isDirected) {
            vertex2.addEdge(vertex1, weight);
        }
    }
    
    public void removeEdge(Vertex vertex1, Vertex vertex2) {
        vertex1.removeEdge(vertex2);
        if (!isDirected) {
            vertex2.removeEdge(vertex1);
        }
    }
    
    public void removeVertex(Vertex vertex) {
        vertices.remove(vertex);
    }
    
    public ArrayList<Vertex> getVertices() {
        return vertices;
    }
    
    public boolean isWeighted() {
        return isWeighted;
    }
    
    public boolean isDirected() {
        return isDirected;
    }
    
    public Vertex getVertexByValue(String value) {
        for (Vertex v: vertices) {
            if (v.getData() == value) {
                return v;
            }
        }
        
        return null;
    }
    
    public void print() {
        for (Vertex v: vertices) {
            v.print(isWeighted);
        }
    }
    
    public static void main(String[] args) {
        Graph busNetwork = new Graph(true, false);
        Vertex cliftonStation = busNetwork.addVertex("Clifton");
        Vertex capeMayStation = busNetwork.addVertex("Cape May");
        
        busNetwork.addEdge(cliftonStation, capeMayStation, 1000);
        
        busNetwork.print();
    }
}
