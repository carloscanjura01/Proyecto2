import dotenv from 'dotenv';
dotenv.config();

export const MongoConnection = process.env.DBURI;
export const TokenSecret  = process.env.TOKEN_SECRET;
export const Debug  = process.env.DEBUG;
export const Port  = process.env.PORT;
