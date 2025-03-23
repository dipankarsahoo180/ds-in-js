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
}

let g = new BidirectionalGraph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong")
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

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

g.removeEdge('Tokyo','Hong Kong');
g.removeVertex('Dallas');
console.log(g);