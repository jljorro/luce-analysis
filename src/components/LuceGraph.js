import Graph from "graphology";
import { SigmaContainer } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

// import de los datos del grafo en formato json
import conexiones from '../data/Grafo.json';
import actividades from '../data/Actividades.json';

// ejemplo basico: ejemplo sacado de este enlace: https://sim51.github.io/react-sigma/docs/example

/*function searchData(code, activities){
    var data = "";
    for(var i = 0; i < activities.length; i++){
        if(activities[i]["CD_ACTIVITY"] === code){
            data = activities[i];
        }
        else{
            i++;
        }
    }

    return data;
}

function addNodeList(activity, nodes_data){
    //if (nodes_list.includes(my_graph_elem[target]) === false){
        //nodes_data.push(searchData(my_graph_elem[target], activities));
        nodes_data.push(activity);
   // } else {
    //    console.log("The node is already in the list");
     //   console.log(nodes_list);
//console.log(my_graph_elem[target]);
    //}
}

function getNodes(activities){
    //console.log(my_graph);
    //var nodes_list = [];
    var nodes_data = [];
    for(var i = 0; i < activities.length; i++){
        //addNodeList(my_graph[i], activities, nodes_list, nodes_data, 'A');
        //addNodeList(my_graph[i], activities, nodes_list, nodes_data, 'B');
        addNodeList(activities[i], nodes_data);
    }

    return nodes_data;
}*/

const Colors = Object.freeze({
    politics_RED: "#FA4F40",
    art_GREEN: "#00cc00",
    sport_YELLOW: "#ffff00",
    music_BLUE: "#0000ff",
    voluntary_PURPLE: "#6600ff",
    other_BROWN: "#A04000"
  });

function selectColour(category){
    var color = "";
    if (category === "Artistica"){
        color = Colors.art_GREEN;
    } else if (category === "Voluntariado"){
        color = Colors.voluntary_PURPLE;
    } else if (category === "Deportiva"){
        color = Colors.sport_YELLOW;
    } else if (category === "Musical"){
        color = Colors.music_BLUE;
    } else if (category === "Politica"){
        color = Colors.politics_RED;
    } else if (category === "Otros"){
        color = Colors.other_BROWN;
    }

    return color;
}

function addNode(my_graph, node_data){

    const size_weight = 1.2; // parameter to multiply the size of the participants
    my_graph.addNode(node_data["CD_ACTIVITY"], { x: Math.random(), y: Math.random(), size: node_data["Estudiantes"].length*size_weight, label: node_data["DS_TITLE"], color: selectColour(node_data["Categoria"]) });
}

function createNodes(my_graph, my_nodes){
    for (var i = 0; i < my_nodes.length; i++){
        addNode(my_graph, my_nodes[i]);
    }
}

function addLink(my_graph, link){
    const size_weight_link = 0.02; // parameter to multiply the size of the link

    var weight = link['Weigth']

    my_graph.addEdge(link['A'], link['B'],  { label: weight, size: size_weight_link*weight, color: "#DCDCDC"});

    // {A: 'MUS01', B: 'OTR08', Weigth: Array(2)}
}

function createEdges(my_graph, connections){
    console.log(connections);

    for (var i = 0; i < connections.length; i++){
        addLink(my_graph, connections[i]);
    }
}



export default function LuceGraph() {
    
    const graph = new Graph();
    
    createNodes(graph, actividades);
    createEdges(graph, conexiones);

    // nodes represent activities, links represent they have students who have participated in both activities
    // the colour of the nodes could represent the type of activity (sports, cultural, political...)
    // the size of the nodes: the number of participants
    // label of the link: number of participants en common



    
    // height: "500px", width: "1500px"
    return <SigmaContainer style={{ height: "90vh", width: "200vh" }} graph={graph}>
        </SigmaContainer>;

}