import { TodoItem } from "./TodoItem";
import { CosmosClient, Database } from "@azure/cosmos";
import TodoRepository from "./TodoRepository";

export default class TodoRepositoryCosmos implements TodoRepository {
  private client: CosmosClient;
  private database: Database;
  private databaseId: string;

  constructor() {
    this.client = new CosmosClient({
      endpoint: process.env.COSMOS_ENDPOINT as string,
      key: process.env.COSMOS_KEY as string,
    });
    this.databaseId = process.env.COSMOS_DATABASE_ID as string;
    this.database = this.client.database(this.databaseId);
  }

  async init() {
    await this.client.databases.createIfNotExists({ id: this.databaseId });
    await this.database.containers.createIfNotExists({
      id: "Items",
      partitionKey: "/partitionKey",
    });
  }

  async getTodos(): Promise<TodoItem[]> {
    let container = this.database.container("Items");
    const querySpec = {
      query: `SELECT * FROM c`,
    };
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();
    return items;
  }

  async addTodo(todoItem: TodoItem) {
    let container = this.database.container("Items");
    await container.items.create(todoItem);
  }

  async getTodo(id: String): Promise<TodoItem | null> {
    let container = this.database.container("Items");
    const querySpec = {
      query: `SELECT * FROM c where c.id = "${id}"`,
    };
    const { resources: items } = await container.items
      .query(querySpec)
      .fetchAll();
    if (items && items.length > 0) {
      return items[0];
    }
    return null;
  }

  async deleteTodo(id: string) {
    let container = this.database.container("Items");
    await container.item(id).delete();
  }
}
