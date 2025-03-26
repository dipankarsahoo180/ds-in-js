class BidirectionalGraph{
    constructor (){
        this.adjacencyList = {};
    }

    addVertex(name){
        //if vertext does not exist then add a node/key.else do nothing
        if(!this.adjacencyList[name]) this.adjacencyList[name] = [];
    }

    addEdge(v1,v2){
        //push the value into both lists alternatively (since bidirectional)
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1,v2){
        //remove v1 from v2 and v2 from v1, since bidirectional
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((v)=>v!=v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v)=>v!=v1);
        
        // (optional)
        // finally remove the vertex from the grapgh if no vertext remains
        if(this.adjacencyList[v1]?.length == 0){
            delete this.adjacencyList[v1];
        }
        if(this.adjacencyList[v2]?.length == 0){
            delete this.adjacencyList[v2];
        }
    }

    removeVertex(name){
        if(this.adjacencyList[name]){
            while(this.adjacencyList[name] && 
                this.adjacencyList[name].length !=0){
                //first pop the value v and then remove Edge from both v and name.
                const removedvertex = this.adjacencyList[name].pop();
                this.removeEdge(name,removedvertex);
            }
            //finally remove the vertex from the grapgh
            delete this.adjacencyList[name];

        }
    }

    //traverse in one direction to end and then come back
    depthFirstTraversal(start){
        const result = []; //to list the values into the array
        const visited = {}; //to check if the node is visited or not

        const dfs = (vertex) => {
            if(!vertex) return null;
            //push value into result and mark visited
            result.push(vertex);
            visited[vertex] = true;
            //recursive call for each neighbour 
            // if they are not yet visited 
            this.adjacencyList[vertex]?.forEach(neighbour => {
                if(!visited[neighbour])
                    return dfs(neighbour)
            });
        }
        dfs(start);
        return result;
    }
}

let g1 = new BidirectionalGraph();
g1.addVertex("Dallas");
g1.addVertex("Tokyo");
g1.addVertex("Aspen");
g1.addVertex("Los Angeles");
g1.addVertex("Hong Kong")
g1.addEdge("Dallas", "Tokyo");
g1.addEdge("Dallas", "Aspen");
g1.addEdge("Hong Kong", "Tokyo");
g1.addEdge("Hong Kong", "Dallas");
g1.addEdge("Los Angeles", "Hong Kong");
g1.addEdge("Los Angeles", "Aspen");

/**
 * {
    "adjacencyList": {
        "Dallas": [
            "Tokyo",
            "Aspen",
            "Hong Kong"
        ],
        "Tokyo": [
            "Dallas",
            "Hong Kong"
        ],
        "Aspen": [
            "Dallas",
            "Los Angeles"
        ],
        "Los Angeles": [
            "Hong Kong",
            "Aspen"
        ],
        "Hong Kong": [
            "Tokyo",
            "Dallas",
            "Los Angeles"
        ]
    }
}
 */

g1.removeEdge('Tokyo','Hong Kong');
g1.removeVertex('Dallas');
console.log(g1);
console.log(g1.depthFirstTraversal('Aspen'));

let g2 = new BidirectionalGraph();

g2.addVertex("A")
g2.addVertex("B")
g2.addVertex("C")
g2.addVertex("D")
g2.addVertex("E")
g2.addVertex("F")


g2.addEdge("A", "B")
g2.addEdge("A", "C")
g2.addEdge("B","D")
g2.addEdge("C","E")
g2.addEdge("D","E")
g2.addEdge("D","F")
g2.addEdge("E","F")
console.log(g2.depthFirstTraversal("A"));