// Backend API Configuration
export const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://192.168.137.37:4000/api";

// RabbitMQ Configuration (for reference - these will be used by your backend)
export const RABBITMQ_CONFIG = {
  host: process.env.REACT_APP_RABBITMQ_HOST || "localhost",
  port: process.env.REACT_APP_RABBITMQ_PORT || 5672,
  username: process.env.REACT_APP_RABBITMQ_USERNAME || "guest",
  password: process.env.REACT_APP_RABBITMQ_PASSWORD || "guest",
};

// MongoDB Configuration (for reference - these will be used by your backend)
export const MONGODB_CONFIG = {
  uri: process.env.REACT_APP_MONGODB_URI || "mongodb://localhost:27017",
  database: process.env.REACT_APP_MONGODB_DATABASE || "blumo",
  collection: process.env.REACT_APP_MONGODB_COLLECTION || "campaigns",
};

