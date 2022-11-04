import java.util.ArrayList;

public class Vertex {
    
    private String data;
    private ArrayList<Edge> edges;
    
    public Vertex(String inputData) {
        this.data = inputData;
        this.edges = new ArrayList<>();
    }
    
    public String getData() {
        return data;
    }
    
    public ArrayList<Edge> getEdges() {
        return edges;
    }
    
    public void addEdge(Vertex endVertex, Integer weight) {
        this.edges.add(new Edge(this, endVertex, weight));
    }
    
    public void removeEdge(Vertex endVertex) {
        this.edges.removeIf(edge -> edge.getEnd().equals(endVertex));
    }
    
    public void print(boolean showWeight) {
        String message = "";
        
        if (edges.size() == 0) {
            System.out.println(data + " -->");
            return;
        }
        
        for (int i = 0; i < edges.size(); i++) {
            if (i == 0) {
                message += edges.get(i).getStart().data + " --> ";
            }
            
            message += edges.get(i).getEnd().data;
            
            if (showWeight) {
                message += " (" + edges.get(i).getWeight() + ")";
            }
            
            if (i != edges.size() - 1) {
                message += ", ";
            }
            System.out.println(message);
        }
    }
}
