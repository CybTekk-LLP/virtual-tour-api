import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

export const {
  PORT,
  JWT_SECRET,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  ACCOUNT_NAME,
  SAS_TOKEN,
  CONTAINER_NAME,
  UPLOADS_PATH,
  ENV,
  NODEMAILER_PASSWORD,
  NODEMAILER_EMAIL,
  PUBLIC_BASE_URI,
  DATABASE_URL,
} = process.env;
