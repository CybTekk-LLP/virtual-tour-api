import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const {
    PORT,
    JWT_SECRET,
    ADMIN_EMAIL,
    ADMIN_PASSWORD,
    TWITTER_REDIRECT_URI,
    TWITTER_CLIENT_SECRET,
    TWITTER_CLIENT_ID,
    TWITTER_OAUTH_URL,
    GOOGLE_MAP_API_KEY,
    FACEBOOK_APP_SECRET,
    REDIRECT_URI ,
    FACEBOOK_APP_ID,
    UPLOADS_PATH,
    ENV,
    NODEMAILER_PASSWORD,
    NODEMAILER_EMAIL,
    PUBLIC_BASE_URI,
    DATABASE_URL,
} = process.env;
