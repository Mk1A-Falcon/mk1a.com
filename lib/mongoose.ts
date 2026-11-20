import mogoose, { Mongoose } from "mongoose";

declare global {
  var mongoose:
  | {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  }
  | undefined;
}

const MONGO_URL = process.env.MONGO_URL as string;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {conn: null, promise: null};
}

async function dbConnect() {

  if (cached?.conn) return cached!.conn;
  
  if (!cached!.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached!.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }

}