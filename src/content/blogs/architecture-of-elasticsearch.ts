import { type Blog } from "./types";

const post: Blog = {
  slug: "architecture-of-elasticsearch.-how-elasticsearch-stores-the-data",
  title: "Architecture of ElasticSearch. How ElasticSearch stores the data.",
  desc: "",
  category: "Elasticsearch",
  image: "/blogs/architecture-of-elasticsearch.png",
  createdAt: "2023-08-18T18:44:08.695Z",
  updatedAt: "2024-01-09T07:24:28.676Z",
  content: `<p>Elasticsearch is a distributed free and open search and analytics engine that supports all data types including textual, numeric, structured, unstructured, dense vectors, and geospatial data. It is the heart of the Elastic stack which is very scalable and fast.</p><p>Elasticsearch can run Full-Text Search, Fuzzy Search, and KNN for vector data. Every data in Elasticsearch is by default indexed which makes it more faster for search. It can handle petabytes of data with its sharding strategy to give consistent results.</p><h2>Key Components of Elasticsearch</h2><p>Nodes, Indices, and Shards are some of the Key components of Elasticsearch which helps to achieve scalability and flexibility.</p><h3>Elasticsearch Cluster</h3><p>Elasticsearch Cluster is a group of machines (Nodes) collaborating to manage and retrieve information efficiently, making it ideal for handling big collections of data. It makes sure that the data availability is high. If you can think of it as a cloud infrastructure it is similar to the VPC.</p><p>When an instance of Elasticsearch is created the system automatically creates a Cluster. You can specify the number of machines(Nodes), Indices, and sharding strategy for that specific cluster.</p><h3>Nodes</h3><p>Nodes in Elasticsearch are the Machines or the servers in an Elasticsearch Cluster that stores the data. Technically Node is an instance of Elasticsearch that runs on a machine which means a single computer can run multiple Elasticsearch Instances (nodes).</p><p></p>`,
};

export default post;
